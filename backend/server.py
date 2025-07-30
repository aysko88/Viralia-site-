from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import pymongo
from datetime import datetime
import os
from dotenv import load_dotenv
import uuid
import json
import aiofiles

load_dotenv()

app = FastAPI(title="ViralIA API", description="API pour le site ViralIA - TikTok AI Training")

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration MongoDB
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017/viralia")
try:
    client = pymongo.MongoClient(MONGO_URL, serverSelectionTimeoutMS=5000)
    client.server_info()  # Test connection
    db = client.viralia
    # Collections
    reviews_collection = db.reviews
    contacts_collection = db.contacts
    payments_collection = db.payments
    print("MongoDB connected successfully")
except Exception as e:
    print(f"MongoDB connection failed: {e}")
    # Fallback to in-memory storage for demo
    reviews_collection = None
    contacts_collection = None
    payments_collection = None

# Modèles Pydantic
class Review(BaseModel):
    id: Optional[str] = None
    name: str
    avatar: Optional[str] = None
    rating: int
    comment: str
    pack: str
    created_at: Optional[datetime] = None

class Contact(BaseModel):
    id: Optional[str] = None
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: Optional[datetime] = None

class Payment(BaseModel):
    id: Optional[str] = None
    name: str
    email: EmailStr
    pack: str
    amount: float
    created_at: Optional[datetime] = None

# Créer le dossier uploads s'il n'existe pas
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

@app.get("/")
async def root():
    return {"message": "ViralIA API - L'IA qui rend TikTok rentable"}

# Données en mémoire pour la démo (remplace MongoDB si indisponible)
demo_reviews = []
demo_contacts = []
demo_payments = []

# Routes pour les avis clients
@app.get("/api/reviews", response_model=List[Review])
async def get_reviews():
    if reviews_collection:
        reviews = list(reviews_collection.find({}, {"_id": 0}))
    else:
        reviews = demo_reviews
    return reviews

@app.post("/api/reviews", response_model=Review)
async def create_review(review: Review):
    review.id = str(uuid.uuid4())
    review.created_at = datetime.now()
    review_dict = review.dict()
    
    if reviews_collection:
        reviews_collection.insert_one(review_dict)
    else:
        demo_reviews.append(review_dict)
    
    return review

# Routes pour les contacts
@app.post("/api/contact")
async def create_contact(contact: Contact):
    contact.id = str(uuid.uuid4())
    contact.created_at = datetime.now()
    contact_dict = contact.dict()
    
    if contacts_collection:
        contacts_collection.insert_one(contact_dict)
    else:
        demo_contacts.append(contact_dict)
    
    return {"message": "Message envoyé avec succès!", "id": contact.id}

@app.get("/api/contacts")
async def get_contacts():
    if contacts_collection:
        contacts = list(contacts_collection.find({}, {"_id": 0}))
    else:
        contacts = demo_contacts
    return contacts

# Routes pour les paiements
@app.post("/api/payment/proof")
async def upload_payment_proof(
    name: str = Form(...),
    email: str = Form(...),
    pack: str = Form(...),
    amount: float = Form(...),
    file: UploadFile = File(...)
):
    # Générer un nom unique pour le fichier
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = f"uploads/{unique_filename}"
    
    # Sauvegarder le fichier
    async with aiofiles.open(file_path, 'wb') as f:
        content = await file.read()
        await f.write(content)
    
    # Enregistrer en base ou en mémoire
    payment = {
        "id": str(uuid.uuid4()),
        "name": name,
        "email": email,
        "pack": pack,
        "amount": amount,
        "file_path": file_path,
        "created_at": datetime.now()
    }
    
    if payments_collection:
        payments_collection.insert_one(payment)
    else:
        demo_payments.append(payment)
    
    return {"message": "Preuve de paiement envoyée avec succès!", "id": payment["id"]}

@app.get("/api/payments")
async def get_payments():
    if payments_collection:
        payments = list(payments_collection.find({}, {"_id": 0}))
    else:
        payments = demo_payments
    return payments

# Route pour les informations des packs
@app.get("/api/packs")
async def get_packs():
    packs = [
        {
            "id": "starter",
            "name": "Pack Starter",
            "price": 97,
            "description": "Parfait pour débuter sur TikTok avec l'IA",
            "features": [
                "Bases de TikTok et algorithme",
                "Introduction à l'IA pour le contenu",
                "Outils gratuits recommandés",
                "Guide de création de contenu",
                "Support communautaire"
            ],
            "popular": False
        },
        {
            "id": "viral",
            "name": "Pack Viral",
            "price": 197,
            "description": "Stratégies concrètes pour devenir viral",
            "features": [
                "Automatisation IA avancée",
                "Stratégies de contenu viral",
                "Outils premium inclus",
                "Analyse de performance",
                "Templates prêts à l'emploi",
                "Support prioritaire"
            ],
            "popular": True
        },
        {
            "id": "pro",
            "name": "Pack Pro + Dashboards",
            "price": 397,
            "description": "Solution complète avec automatisation",
            "features": [
                "Tunnels de vente automatisés",
                "Dashboards de performance",
                "Automatisation complète",
                "Coaching personnalisé",
                "Accès aux outils premium",
                "Résultats garantis",
                "Support 24/7"
            ],
            "popular": False
        }
    ]
    return packs

# Ajouter quelques avis de démonstration
@app.on_event("startup")
async def startup_event():
    # Vérifier si des avis existent déjà
    if reviews_collection.count_documents({}) == 0:
        demo_reviews = [
            {
                "id": str(uuid.uuid4()),
                "name": "Marie L.",
                "avatar": "https://images.unsplash.com/photo-1494790108755-2616b09bd8c8?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "Pack Viral incroyable ! J'ai gagné 50K followers en 3 semaines 🚀",
                "pack": "viral",
                "created_at": datetime.now()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Thomas K.",
                "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "L'IA a transformé mon contenu. Mes vues ont explosé ! 💯",
                "pack": "pro",
                "created_at": datetime.now()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Sarah M.",
                "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "Pack Starter parfait pour débuter. Très bien expliqué !",
                "pack": "starter",
                "created_at": datetime.now()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Alex R.",
                "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "Automatisation dingue ! Je gagne en dormant maintenant 💰",
                "pack": "pro",
                "created_at": datetime.now()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Emma D.",
                "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "Résultats fous ! 2M de vues sur ma première vidéo IA 🔥",
                "pack": "viral",
                "created_at": datetime.now()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Lucas B.",
                "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                "rating": 5,
                "comment": "Dashboard incroyable ! Je vois mes profits en temps réel",
                "pack": "pro",
                "created_at": datetime.now()
            }
        ]
        reviews_collection.insert_many(demo_reviews)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)