console.log("Autofill extension loaded on Eightfold page");

//triggered every time we press autofill.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofill") {
    fillFirstName();
    fillLastName();
    fillEmail();
    fillCountryCode();
    fillPhoneNumber();
    fillHowDidYouHear();
    fillFullName();
    fillDate();
    fillDisabilityStatus();
    fillVeteranStatus();
    fillWillingToRelocate();
    fillStreetAddress();
    fillCity();
    fillState();
    fillPostalCode();
    fillCountry();
    fillSalaryExpectations();
    fillRemoteWorkPreference();
    fillAuthorizedToWork();
    fillSponsorship();
    uploadResume();
    uploadCoverLetter();
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

function fillHowDidYouHear() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const howDidYouHearField = document.getElementById('input-7');

    if (howDidYouHearField) {
      // Focus and click the field
      howDidYouHearField.focus();
      howDidYouHearField.click();

      // Clear and type the search term
      howDidYouHearField.value = '';
      howDidYouHearField.value = data.commonQuestions.howDidYouHear;

      // Trigger input event to show dropdown
      howDidYouHearField.dispatchEvent(new Event('input', { bubbles: true }));
      howDidYouHearField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-5');

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

            console.log("Clicked how did you hear option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("How did you hear field not found");
    }
  });
}

function fillFullName() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const fullNameField = document.getElementById('Voluntary_Self_Identification_of_Disability_CC305_Name');

    if (fullNameField) {
      // Focus the field first
      fullNameField.focus();

      // Set the value using firstName + lastName
      fullNameField.value = data.firstName + ' ' + data.lastName;

      // Trigger multiple events
      fullNameField.dispatchEvent(new Event('input', { bubbles: true }));
      fullNameField.dispatchEvent(new Event('change', { bubbles: true }));
      fullNameField.dispatchEvent(new Event('keyup', { bubbles: true }));
      fullNameField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      fullNameField.blur();

      console.log("Full name filled with:", data.firstName + ' ' + data.lastName);
    } else {
      console.log("Full name field not found");
    }
  });
}

function fillDate() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const dateField = document.getElementById('Voluntary_Self_Identification_of_Disability_CC305_Date');

    if (dateField) {
      // Focus the field first
      dateField.focus();

      // Set the value using lastUpdated
      dateField.value = data.lastUpdated;

      // Trigger multiple events
      dateField.dispatchEvent(new Event('input', { bubbles: true }));
      dateField.dispatchEvent(new Event('change', { bubbles: true }));
      dateField.dispatchEvent(new Event('keyup', { bubbles: true }));
      dateField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      dateField.blur();

      console.log("Date filled with:", data.lastUpdated);
    } else {
      console.log("Date field not found");
    }
  });
}

function fillDisabilityStatus() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const disabilityStatusField = document.getElementById('input-10');

    if (disabilityStatusField) {
      // Focus and click the field
      disabilityStatusField.focus();
      disabilityStatusField.click();

      // Clear and type the search term
      disabilityStatusField.value = '';
      disabilityStatusField.value = data.disabilityStatus;

      // Trigger input event to show dropdown
      disabilityStatusField.dispatchEvent(new Event('input', { bubbles: true }));
      disabilityStatusField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-8');

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

            console.log("Clicked disability status option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Disability status field not found");
    }
  });
}

function fillVeteranStatus() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const veteranStatusField = document.getElementById('input-13');

    if (veteranStatusField) {
      // Focus and click the field
      veteranStatusField.focus();
      veteranStatusField.click();

      // Convert veteran status to the expected value
      const veteranValue = data.veteranStatus === "Not a Veteran"
        ? "I am not a protected veteran"
        : data.veteranStatus;

      // Clear and type the search term
      veteranStatusField.value = '';
      veteranStatusField.value = veteranValue;

      // Trigger input event to show dropdown
      veteranStatusField.dispatchEvent(new Event('input', { bubbles: true }));
      veteranStatusField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-11');

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

            console.log("Clicked veteran status option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Veteran status field not found");
    }
  });
}

function fillWillingToRelocate() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const willingToRelocateField = document.getElementById('input-16');

    if (willingToRelocateField) {
      // Focus and click the field
      willingToRelocateField.focus();
      willingToRelocateField.click();

      // For boolean value, convert to "Yes" or "No"
      const relocateValue = data.willingToRelocate ? "Yes" : "No";

      // Clear and type the search term
      willingToRelocateField.value = '';
      willingToRelocateField.value = relocateValue;

      // Trigger input event to show dropdown
      willingToRelocateField.dispatchEvent(new Event('input', { bubbles: true }));
      willingToRelocateField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-14');

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

            console.log("Clicked willing to relocate option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Willing to relocate field not found");
    }
  });
}

function fillStreetAddress() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const streetAddressField = document.getElementById('Address_Address_Line_1');

    if (streetAddressField) {
      // Focus the field first
      streetAddressField.focus();

      // Set the value
      streetAddressField.value = data.currentAddress.street;

      // Trigger multiple events
      streetAddressField.dispatchEvent(new Event('input', { bubbles: true }));
      streetAddressField.dispatchEvent(new Event('change', { bubbles: true }));
      streetAddressField.dispatchEvent(new Event('keyup', { bubbles: true }));
      streetAddressField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      streetAddressField.blur();

      console.log("Street address filled with:", data.currentAddress.street);
    } else {
      console.log("Street address field not found");
    }
  });
}

function fillCity() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const cityField = document.getElementById('Address_City');

    if (cityField) {
      // Focus the field first
      cityField.focus();

      // Set the value
      cityField.value = data.currentAddress.city;

      // Trigger multiple events
      cityField.dispatchEvent(new Event('input', { bubbles: true }));
      cityField.dispatchEvent(new Event('change', { bubbles: true }));
      cityField.dispatchEvent(new Event('keyup', { bubbles: true }));
      cityField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      cityField.blur();

      console.log("City filled with:", data.currentAddress.city);
    } else {
      console.log("City field not found");
    }
  });
}

function fillState() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const stateField = document.getElementById('Address_State');

    if (stateField) {
      // Focus the field first
      stateField.focus();

      // Set the value
      stateField.value = data.currentAddress.state;

      // Trigger multiple events
      stateField.dispatchEvent(new Event('input', { bubbles: true }));
      stateField.dispatchEvent(new Event('change', { bubbles: true }));
      stateField.dispatchEvent(new Event('keyup', { bubbles: true }));
      stateField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      stateField.blur();

      console.log("State filled with:", data.currentAddress.state);
    } else {
      console.log("State field not found");
    }
  });
}

function fillPostalCode() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const postalCodeField = document.getElementById('Address_Postal_Code');

    if (postalCodeField) {
      // Focus the field first
      postalCodeField.focus();

      // Set the value
      postalCodeField.value = data.currentAddress.zipCode;

      // Trigger multiple events
      postalCodeField.dispatchEvent(new Event('input', { bubbles: true }));
      postalCodeField.dispatchEvent(new Event('change', { bubbles: true }));
      postalCodeField.dispatchEvent(new Event('keyup', { bubbles: true }));
      postalCodeField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      postalCodeField.blur();

      console.log("Postal code filled with:", data.currentAddress.zipCode);
    } else {
      console.log("Postal code field not found");
    }
  });
}

function fillCountry() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const countryField = document.getElementById('input-19');

    if (countryField) {
      // Focus and click the field
      countryField.focus();
      countryField.click();

      // Clear and type the search term
      countryField.value = '';
      countryField.value = data.currentAddress.country;

      // Trigger input event to show dropdown
      countryField.dispatchEvent(new Event('input', { bubbles: true }));
      countryField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-17');

        if (listContainer) {
          console.log("Found list container");

          // Select the second option (index 1)
          const buttons = listContainer.querySelectorAll('button[role="option"]');

          if (buttons.length >= 2) {
            const button = buttons[1]; // Select the second option
            console.log("Found button:", button.textContent);

            // Try multiple click methods
            button.focus();
            button.click();

            // Also dispatch a mouse event in case regular click doesn't work
            button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            button.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

            console.log("Clicked country option (second)");
          } else if (buttons.length === 1) {
            // Fallback to first option if only one exists
            const button = buttons[0];
            console.log("Only one option found, using:", button.textContent);
            button.focus();
            button.click();
            button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            button.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Country field not found");
    }
  });
}

function fillSalaryExpectations() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const salaryField = document.getElementById('Application_questions_us_annual_salary');

    if (salaryField) {
      // Focus the field first
      salaryField.focus();

      // Set the value
      salaryField.value = data.desiredSalary;

      // Trigger multiple events
      salaryField.dispatchEvent(new Event('input', { bubbles: true }));
      salaryField.dispatchEvent(new Event('change', { bubbles: true }));
      salaryField.dispatchEvent(new Event('keyup', { bubbles: true }));
      salaryField.dispatchEvent(new Event('keydown', { bubbles: true }));

      // Blur the field
      salaryField.blur();

      console.log("Salary expectations filled with:", data.desiredSalary);
    } else {
      console.log("Salary expectations field not found");
    }
  });
}

function fillRemoteWorkPreference() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const remoteWorkField = document.getElementById('input-22');

    if (remoteWorkField) {
      // Focus and click the field
      remoteWorkField.focus();
      remoteWorkField.click();

      // Convert remote work preference to the expected value
      const remoteWorkValue = data.remoteWorkPreference === "hybrid"
        ? "Hybrid, 2-3 days in office"
        : data.remoteWorkPreference;

      // Clear and type the search term
      remoteWorkField.value = '';
      remoteWorkField.value = remoteWorkValue;

      // Trigger input event to show dropdown
      remoteWorkField.dispatchEvent(new Event('input', { bubbles: true }));
      remoteWorkField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-20');

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

            console.log("Clicked remote work preference option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Remote work preference field not found");
    }
  });
}

function fillAuthorizedToWork() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const authorizedToWorkField = document.getElementById('input-25');

    if (authorizedToWorkField) {
      // Focus and click the field
      authorizedToWorkField.focus();
      authorizedToWorkField.click();

      // Convert boolean to "Yes" or "No"
      const authorizedValue = data.authorizedToWork ? "Yes" : "No";

      // Clear and type the search term
      authorizedToWorkField.value = '';
      authorizedToWorkField.value = authorizedValue;

      // Trigger input event to show dropdown
      authorizedToWorkField.dispatchEvent(new Event('input', { bubbles: true }));
      authorizedToWorkField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-23');

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

            console.log("Clicked authorized to work option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Authorized to work field not found");
    }
  });
}

function fillSponsorship() {
  chrome.storage.local.get(['userData'], (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    const sponsorshipField = document.getElementById('input-28');

    if (sponsorshipField) {
      // Focus and click the field
      sponsorshipField.focus();
      sponsorshipField.click();

      // Convert boolean to "Yes" or "No"
      const sponsorshipValue = data.requireSponsorship ? "Yes" : "No";

      // Clear and type the search term
      sponsorshipField.value = '';
      sponsorshipField.value = sponsorshipValue;

      // Trigger input event to show dropdown
      sponsorshipField.dispatchEvent(new Event('input', { bubbles: true }));
      sponsorshipField.dispatchEvent(new Event('keyup', { bubbles: true }));

      // Wait for dropdown to appear and be clickable
      setTimeout(() => {
        const listContainer = document.getElementById('list-26');

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

            console.log("Clicked sponsorship option");
          } else {
            console.log("Button not found");
          }
        } else {
          console.log("List container not found - may need more wait time");
        }
      }, 800);

    } else {
      console.log("Sponsorship field not found");
    }
  });
}

async function uploadResume() {
  chrome.storage.local.get(['userData'], async (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    // Find the resume file input element using the parent class
    const fileInput = document.querySelector('.upload-resume-dropzone input[type="file"]');

    if (!fileInput) {
      console.log("Resume file input not found");
      return;
    }

    try {
      console.log("Downloading resume from:", data.resumeUrl);

      // Fetch the resume from the URL
      const response = await fetch(data.resumeUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.statusText}`);
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Extract filename from URL or use default
      const urlParts = data.resumeUrl.split('/');
      const filename = urlParts[urlParts.length - 1] || 'resume.pdf';

      // Create a File object from the blob
      const file = new File([blob], filename, { type: blob.type });

      // Create a DataTransfer object to simulate file selection
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      // Assign the files to the input element
      fileInput.files = dataTransfer.files;

      // Trigger change event
      fileInput.dispatchEvent(new Event('change', { bubbles: true }));
      fileInput.dispatchEvent(new Event('input', { bubbles: true }));

      console.log("Resume uploaded successfully:", filename);

      // Wait for the dialog to appear and click the confirm button
      setTimeout(() => {
        const confirmButton = document.getElementById('confirmUploadResume');
        if (confirmButton) {
          confirmButton.click();
          console.log("Clicked resume confirm button");
        } else {
          console.log("Confirm button not found");
        }
      }, 500);
    } catch (error) {
      console.error("Error uploading resume:", error);
    }
  });
}

async function uploadCoverLetter() {
  chrome.storage.local.get(['userData'], async (result) => {
    const data = result.userData;

    if (!data) {
      console.log("No data found in storage");
      return;
    }

    // Find the cover letter file input element using the parent class
    const fileInput = document.querySelector('.file-upload-Cover_Letter_cover_letter input[type="file"]');

    if (!fileInput) {
      console.log("Cover letter file input not found");
      return;
    }

    try {
      console.log("Downloading cover letter from:", data.coverLetterUrl);

      // Fetch the cover letter from the URL
      const response = await fetch(data.coverLetterUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch cover letter: ${response.statusText}`);
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Extract filename from URL or use default
      const urlParts = data.coverLetterUrl.split('/');
      const filename = urlParts[urlParts.length - 1] || 'cover_letter.pdf';

      // Create a File object from the blob
      const file = new File([blob], filename, { type: blob.type });

      // Create a DataTransfer object to simulate file selection
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      // Assign the files to the input element
      fileInput.files = dataTransfer.files;

      // Trigger change event
      fileInput.dispatchEvent(new Event('change', { bubbles: true }));
      fileInput.dispatchEvent(new Event('input', { bubbles: true }));

      console.log("Cover letter uploaded successfully:", filename);
    } catch (error) {
      console.error("Error uploading cover letter:", error);
    }
  });
}
