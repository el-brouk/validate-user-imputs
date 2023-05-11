# validate-user-imputs
#### Problem Statement

Capture and validate inputs submitted by user through add contact form.

If inputs are invalid meaningful error messages should be displayed.

If inputs are valid, the contact details should be stored in contacts collection.

##### Validation Criteria

1. Mandatory Inputs
    - Firstname
    - Email
    - Home Contact No

2. Firstname and Lastname should allow only alphabets and (.)

3. 2 Additional input fields should be created for capturing contact numbers

4. Contact Nos inputted should be in one of the following formats:
    - +910999999999
    - +91099-999-9999
    - +91(099)-999-9999
    - +91(099)9999999
    - +91099 999 9999
    - +91099 999-9999
    - +91(099) 999-9999
    - +91099.999.9999
    - +91 0999999999
    - +91 099-999-9999
    - +91 (099)-999-9999
    - +91 (099)9999999
    - +91 099 999 9999
    - +91 099 999-9999
    - +91 (099) 999-9999
    - +91 099.999.9999


5. Email should be of the format: `example@domain.com`

6. Birthdates for which age is less than 15 years should be disabled

7. Notes should not allow more than 200 characters to be inputted
