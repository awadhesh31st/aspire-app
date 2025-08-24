# Aspire Card Management App

🔗 **Live Demo**: [Aspire App](https://aspire-app-sooty.vercel.app/)

---

## 📌 Overview
This project is a **frontend coding challenge** that brings interactivity and dynamic behavior to the provided CSS UI.  
It simulates a card management system where users can **add new cards** and **freeze/unfreeze existing ones**.

The app is built using **React + TypeScript** and follows modern best practices with clean, maintainable code.  
Dummy data is served via an **API-like architecture** (mocked within the app), and card states are persisted using **localStorage**.


---


<img width="1710" height="957" alt="Screenshot 2025-08-24 at 4 58 28 PM" src="https://github.com/user-attachments/assets/7a03c068-f6cb-402b-9f25-939744d082cf" />
<img width="1125" height="2436" alt="IMG_0705" src="https://github.com/user-attachments/assets/c4713a85-3d3b-47d4-8cb4-1f5360c0e2fa" />
<img width="1125" height="2436" alt="IMG_0706" src="https://github.com/user-attachments/assets/22099c74-2039-4406-b756-496fa3802398" />

---

## 🚀 Features
- **Initial Cards**: App loads with a few pre-existing cards.
- **Add New Card**:
  - Opens a modal where user enters the **card name**.
  - **Card number** and **expiry date** are randomly generated.
  - Card is appended to the **carousel of cards**.
- **Freeze/Unfreeze Card**:
  - Clicking **Freeze** changes the card to a “frozen” state (with opacity styling).
  - Button toggles to **Unfreeze** when frozen.
  - Cards can be frozen/unfrozen any time.
- **TypeScript** with proper types/interfaces.
- **Local Persistence** with `localStorage`.

---

## 🛠️ Tech Stack
- **React** (Frontend framework)
- **TypeScript** (Static typing)
- **Tailwind CSS** (Styling, responsive UI)
- **LocalStorage** (Persistence)
- **Vercel** (Deployment)

---

## 📂 Project Structure
<img width="421" height="431" alt="Screenshot 2025-08-24 at 5 22 27 PM" src="https://github.com/user-attachments/assets/306cf5db-1f2f-4ee9-9f31-9a9a6edda311" />

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/awadhesh31st/aspire-card-app.git
cd aspire-card-app

npm install
npm run dev

```


