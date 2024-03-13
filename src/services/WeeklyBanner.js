// components/WeeklyBanner.js
import { useState, useEffect } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {CloseIcon} from "@chakra-ui/icons";

const WeeklyBanner = () => {
    const [showBanner, setShowBanner] = useState(true); // Altere para true temporariamente

    const handleBannerClose = () => {
        setShowBanner(false);
    };

    return (
        <>
            {showBanner && (
                <Box
                    position="relative"
                    h={'20em'}
                    bg="green.500"
                    color="white"
                    zIndex="1"
                    p={6}

                    fontFamily='sans-serif'
                    fontWeight={10}
                >Olá, [nome do usuário]!<br/>
                    Ao usar a Lawyer Lamp esta semana, você poupou incríveis [Quantidade de horas] horas e [Quantidade
                    de minutos] minutos! Já pensou em como esse tempo extra pode ser convertido em honorários adicionais
                    ao longo de um mês? Agora imagina em um ano! Você estava desperdiçando esse tempo com tarefas
                    repetitivas, mas agora está investindo da forma mais inteligente e rentável possível. E aqui vai o
                    bônus: através do nosso programa de afiliados, ao indicar a Lawyer Lamp a seus colegas advogados,
                    você ganha 20% de todos os pagamentos que eles realizarem. Se inscreva agora: link
                    <Flex
                        position="absolute"
                        top={2}
                        right={2}

                        onClick={handleBannerClose}
                        cursor="pointer"
                    >
                        <CloseIcon/>
                    </Flex>
                </Box>
            )}
        </>
    );
};

export default WeeklyBanner;
