import { TodoType, UserType } from "./types";

export const generateRandomId = (): string => {
     const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
     let id = "";
     for (let i = 0; i < 12; i++) {
          id += chars[Math.floor(Math.random() * chars.length)];
     }
     return id;
};

export const saveToLocalStorage = (
     key: string,
     data: UserType | TodoType | TodoType[]
) => {
     localStorage.setItem(key, JSON.stringify(data));
};
