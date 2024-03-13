import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import Router from "next/router";
// const PlanContext = createContext({});
// export const AuthProvider = ({ children }) => {
//     const [plan, setPlan] = useState(null);
//     const get_plan = async (plan_id) => {
//         const { data: response } = await api.get("http://localhost:8080/api/login", {
//             headers: {
//                 plan_id: plan_id,
//             }
//         });
//         if (response){
//             setPlan(response);
//         }
//     }
//     return {get_plan};
// };

// export default function GetPlans() {
//   return useContext(PlanContext);
// }

export default function GetPlans() {
    const [plan, setPlan] = useState(null)
    const [allplans, setAllplans] = useState(null)
    const [planCheck, setPlanCheck] = useState(null)
    const get_plan = async (plan_id, token) => {
      try {
        const { data: response } = await api.get(`https://beta.lawyerlamp.com/api/v1/plan/get/by/${plan_id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        setPlan(response)
      } catch (error) {
        console.error("Erro na chamada à API:", error);
      }
    };
    const get_all_plans = async (token) => {
      try {
        const { data: response } = await api.get(`https://beta.lawyerlamp.com/api/v1/plan/get/all`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response)
        setAllplans(response)
      } catch (error) {
        console.error("Erro na chamada à API:", error);
      }
    };
    const plan_checkout = async (token, emailClient, planName) => {
        try {
            const response = await api.post(
                "https://beta.lawyerlamp.com/api/v1/plan/checkout",
                {
                    email_client: emailClient,
                    plan_name: planName, // Use o nome do plano
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response);
            setPlanCheck(response);

            if (response && response.data && response.data.url) {
                window.location.href = response.data.url;
            } else {
                console.error("A resposta da API não contém uma URL válida.");
            }
        } catch (error) {
            console.error("Erro na chamada à API:", error);
        }
    };

    return { get_plan, plan, get_all_plans, allplans, plan_checkout};
  }
