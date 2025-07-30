import requests
import sys
import json
import os
from datetime import datetime
import tempfile

class ViralIAAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, files=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'} if not files else {}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                if files:
                    response = requests.post(url, data=data, files=files)
                else:
                    response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2, default=str)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root endpoint"""
        return self.run_test("Root Endpoint", "GET", "", 200)

    def test_get_reviews(self):
        """Test getting reviews"""
        return self.run_test("Get Reviews", "GET", "api/reviews", 200)

    def test_create_review(self):
        """Test creating a review"""
        review_data = {
            "name": "Test User",
            "rating": 5,
            "comment": "Test review comment",
            "pack": "viral"
        }
        return self.run_test("Create Review", "POST", "api/reviews", 200, data=review_data)

    def test_get_packs(self):
        """Test getting packs information"""
        return self.run_test("Get Packs", "GET", "api/packs", 200)

    def test_create_contact(self):
        """Test creating a contact"""
        contact_data = {
            "name": "Test Contact",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "Test message content"
        }
        return self.run_test("Create Contact", "POST", "api/contact", 200, data=contact_data)

    def test_get_contacts(self):
        """Test getting contacts"""
        return self.run_test("Get Contacts", "GET", "api/contacts", 200)

    def test_upload_payment_proof(self):
        """Test uploading payment proof"""
        # Create a temporary file for testing
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as temp_file:
            temp_file.write("Test payment proof content")
            temp_file_path = temp_file.name

        try:
            with open(temp_file_path, 'rb') as f:
                files = {'file': ('test_proof.txt', f, 'text/plain')}
                data = {
                    'name': 'Test Payer',
                    'email': 'payer@example.com',
                    'pack': 'viral',
                    'amount': 197.0
                }
                success, response = self.run_test(
                    "Upload Payment Proof", 
                    "POST", 
                    "api/payment/proof", 
                    200, 
                    data=data, 
                    files=files
                )
        finally:
            # Clean up temp file
            os.unlink(temp_file_path)
        
        return success, response

    def test_get_payments(self):
        """Test getting payments"""
        return self.run_test("Get Payments", "GET", "api/payments", 200)

def main():
    print("🚀 Starting ViralIA API Tests...")
    print("=" * 50)
    
    # Setup
    tester = ViralIAAPITester("http://localhost:8001")
    
    # Run all tests
    test_results = []
    
    # Basic endpoint tests
    test_results.append(tester.test_root_endpoint())
    test_results.append(tester.test_get_packs())
    
    # Reviews tests
    test_results.append(tester.test_get_reviews())
    test_results.append(tester.test_create_review())
    
    # Contact tests
    test_results.append(tester.test_create_contact())
    test_results.append(tester.test_get_contacts())
    
    # Payment tests
    test_results.append(tester.test_upload_payment_proof())
    test_results.append(tester.test_get_payments())

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed! Backend API is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())