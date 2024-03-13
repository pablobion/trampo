import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import api from "../services/api";
export default function SetLanguage() {
    const {i18n} = useTranslation()
    const getClientIP = async () => {
        try {
            const {data : response} = await api.get('https://api.ipify.org?format=json')
            return response.ip;
        } catch (error) {
            console.error('Erro ao obter o IP do cliente:', error);
            return null;
        }
    };

    const allApiWithClientIP = async () => {
        const clientIP = await getClientIP();
        if (clientIP != null) {
            try {
                // Faça uma solicitação para sua API Python, passando o IP do cliente
                const {data: response} = await api.post('https://beta.lawyerlamp.com/api/v1/detect/language', { ip: clientIP });
                // Processar a resposta da API Python aqui
                i18n.changeLanguage(response.language);
                console.log("teste",response.language)
            } catch (error) {
                i18n.changeLanguage("en");
            }
        }
    }
    return {allApiWithClientIP};
}