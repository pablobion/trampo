
import React from "react";
import {Box, Text} from "@chakra-ui/react";
import WeeklyBanner from "../services/WeeklyBanner";

function ChatMessage({ message, isSent }) {
  const bgColor = isSent ? "#F0F0F0" : "#D7F0F8";
  const textColor = isSent ? "black" : "black";
  const borderRadius = "md";
  const marginFromLeft = isSent ? "auto" : "0";

  return (
    <div>

      <Box
        bg={bgColor}
        color={textColor}
        fontWeight='normal'
        p={4}
        borderRadius={borderRadius}
        alignSelf={isSent ? "flex-end" : "flex-start"}
        maxWidth="80%" 
        wordBreak="break-word"
        mb={2}
        style={{ marginLeft: marginFromLeft }}
      >

        {message}
      </Box>
    </div>
  );
}

export default ChatMessage;
