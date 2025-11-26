document.getElementById('autofill').addEventListener('click', () => {
  const testData = {
    //"resumeUrl": "https://example.com/resume.pdf",
    "resumeUrl": "https://drive.google.com/file/d/1xeQd46vMhKSat558qn87RBsSMgUKUkeR/view?usp=sharing",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phoneType": "mobile",
    "phoneNumber": "5551234567",
    "countryCode": "United States of America",
    "commonQuestions": {
      "howDidYouHear": "LinkedIn"
    },
    "fullName": "John Michael Doe",
    "lastUpdated": "2025-01-08",
    "disabilityStatus": "No",
    "veteranStatus": "Not a Veteran",
    "willingToRelocate": true,
    //"coverLetterUrl": "https://example.com/coverletter.pdf",
    "coverLetterUrl": "https://drive.google.com/file/d/1xeQd46vMhKSat558qn87RBsSMgUKUkeR/view?usp=sharing",
    "currentAddress": {
      "street": "123 Main Street",
      "city": "San Francisco",
      "state": "California",
      "zipCode": "94101",
      "country": "United States"
    },
    "desiredSalary": "150000",
    "remoteWorkPreference": "hybrid",
    "authorizedToWork": true,
    "requireSponsorship": false
  };


  chrome.storage.local.set({ userData: testData }, () => {
    console.log("Data stored in Chrome storage");
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "autofill" }, (response) => {
        console.log("Message sent to content script");
      });
    });
  });
});