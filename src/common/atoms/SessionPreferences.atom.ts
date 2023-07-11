import { atom } from "recoil";

export const globalInput = atom<string>({
    default: "",
    key: "globalInput"
});