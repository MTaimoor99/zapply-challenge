console.log("Autofill extension loaded on Eightfold page");

//triggered every time we press autofill.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofill") {
    fillFirstName();
    fillLastName();
    fillEmail();
    fillCountryCode();
    fillPhoneNumber();
    sendResponse({ status: "success" });
  }

  return true;
});

function fillFirstName() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;
    
    if (!data) {
      console.log("No data found in storage");
      return;
    }
    
    const firstNameField = document.getElementById('Contact_Information_firstname');
    
    if (firstNameField) {
      // Focus the field first
      firstNameField.focus();
      
      // Set the value
      firstNameField.value = data.firstName;
      
      // Trigger multiple events
      firstNameField.dispatchEvent(new Event('input', { bubbles: true }));
      firstNameField.dispatchEvent(new Event('change', { bubbles: true }));
      firstNameField.dispatchEvent(new Event('keyup', { bubbles: true }));
      firstNameField.dispatchEvent(new Event('keydown', { bubbles: true }));
      
      // Blur the field (like when user clicks away)
      firstNameField.blur();
      
      console.log("First name filled with:", data.firstName);
    } else {
      console.log("First name field not found");
    }
  });
}

function fillLastName() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;
    
    if (!data) {
      console.log("No data found in storage");
      return;
    }
    
    const lastNameField = document.getElementById('Contact_Information_lastname');
    
    if (lastNameField) {
      // Focus the field first
      lastNameField.focus();
      
      // Set the value
      lastNameField.value = data.lastName;
      
      // Trigger multiple events
      lastNameField.dispatchEvent(new Event('input', { bubbles: true }));
      lastNameField.dispatchEvent(new Event('change', { bubbles: true }));
      lastNameField.dispatchEvent(new Event('keyup', { bubbles: true }));
      lastNameField.dispatchEvent(new Event('keydown', { bubbles: true }));
      
      // Blur the field
      lastNameField.blur();
      
      console.log("Last name filled with:", data.lastName);
    } else {
      console.log("Last name field not found");
    }
  });
}

function fillEmail() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;
    
    if (!data) {
      console.log("No data found in storage");
      return;
    }
    
    const emailField = document.getElementById('Contact_Information_email');
    
    if (emailField) {
      // Focus the field first
      emailField.focus();
      
      // Set the value
      emailField.value = data.email;
      
      // Trigger multiple events
      emailField.dispatchEvent(new Event('input', { bubbles: true }));
      emailField.dispatchEvent(new Event('change', { bubbles: true }));
      emailField.dispatchEvent(new Event('keyup', { bubbles: true }));
      emailField.dispatchEvent(new Event('keydown', { bubbles: true }));
      
      // Blur the field
      emailField.blur();
      
      console.log("Email filled with:", data.email);
    } else {
      console.log("Email field not found");
    }
  });
}

function fillCountryCode() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;
    
    if (!data) {
      console.log("No data found in storage");
      return;
    }
    
    const countryCodeField = document.getElementById('input-4');
    
    if (countryCodeField) {
      // Focus and click the field
      countryCodeField.focus();
      countryCodeField.click();
      
      // Clear and type the search term
      countryCodeField.value = '';
      countryCodeField.value = data.countryCode;
      
      // Trigger input event to show dropdown
      countryCodeField.dispatchEvent(new Event('input', { bubbles: true }));
      countryCodeField.dispatchEvent(new Event('keyup', { bubbles: true }));
      
      // Wait longer for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-2');
        
        if (listContainer) {
          console.log("Found list container");
          
          const button = listContainer.querySelector('button[role="option"]');
          
          if (button) {
            console.log("Found button:", button.textContent);
            
            // Try multiple click methods
            button.focus();
            button.click();
            
            // Also dispatch a mouse event in case regular click doesn't work
            button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            button.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
            
            console.log("Clicked country option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800); // Increased timeout
      
    } else {
      console.log("Country code field not found");
    }
  });
}

function fillPhoneNumber() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;
    
    if (!data) {
      console.log("No data found in storage");
      return;
    }
    
    const phoneNumberField = document.getElementById('Contact_Information_phone');
    
    if (phoneNumberField) {
      // Focus the field first
      phoneNumberField.focus();
      
      // Set the value
      phoneNumberField.value = data.phoneNumber;
      
      // Trigger multiple events
      phoneNumberField.dispatchEvent(new Event('input', { bubbles: true }));
      phoneNumberField.dispatchEvent(new Event('change', { bubbles: true }));
      phoneNumberField.dispatchEvent(new Event('keyup', { bubbles: true }));
      phoneNumberField.dispatchEvent(new Event('keydown', { bubbles: true }));
      
      // Blur the field
      phoneNumberField.blur();
      
      console.log("Phone number filled with:", data.phoneNumber);
    } else {
      console.log("Phone number field not found");
    }
  });
}
