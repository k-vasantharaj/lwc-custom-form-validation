🧾✨ Record Edit Form with Custom Validation - LWC 🚀  

## 📖 Description  
A Salesforce Lightning Web Component (LWC) that enables users to edit records using `lightning-record-edit-form` with **custom validation logic**.

This project demonstrates how to intercept form submission, apply business rules, and manually control record updates.

---

## 💡 What This Project Covers  

🔹 Using `lightning-record-edit-form` for record updates  
🔹 Handling `onsubmit` event for custom validation  
🔹 Using `event.preventDefault()` to control submission  
🔹 Accessing field values via `event.detail.fields`  
🔹 Manual form submission after validation  
🔹 Displaying toast messages for success & error  

---

## 🌟 Key Features  

✨ Custom validation before saving data  
📞 Phone number validation (must be exactly 10 digits)  
⚡ Manual control over form submission  
🔔 Toast notifications for user feedback  
🎨 Clean UI using Salesforce Lightning Design System (SLDS)  

---

## ⚙️ How It Works  

1️⃣ User clicks **Save**  
2️⃣ `onsubmit` handler is triggered  
3️⃣ `event.preventDefault()` stops default save  
4️⃣ Custom validation logic runs  
5️⃣ If valid → form is submitted manually  
6️⃣ If invalid → error toast is shown  

---
📸 Screenshots
<img width="317" height="236" alt="1" src="https://github.com/user-attachments/assets/28c8f1a1-f4dd-43f2-8e6e-4e93e3566f41" />
<img width="947" height="369" alt="2" src="https://github.com/user-attachments/assets/fc3cc754-5287-4fee-aeee-16d269b0877e" />


