import { keyframes } from "@mui/material/styles";

export const bounceFontSize = keyframes`
    0% {
      font-size: calc(var(--dynamic-font-size) * 1.2);
    	  transform: scale(1.1);
    }
    10% { 
        font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1.2);
    }    

    50% { 
    	  font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1);
    }   
    63% { 
    	  font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1.1);
    }   
    75% { 
    	  font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1);
    }  
    90% { 
    	  font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1.05);
    }  
    100% { 
    	  font-size: calc(var(--dynamic-font-size) * 1.4);
    	  transform: scale(1);
    }  
`;

export const mouseoutAnimation = keyframes`
      0% {
        font-size: calc(var(--dynamic-font-size) * 1.2);
        transform: scale(0.95);
      }
    10% { 
        font-size: calc(var(--dynamic-font-size) + 0px);
        transform: scale(0.9);
    }
    50% {
        font-size: calc(var(--dynamic-font-size) + 0px);
        transform: scale(1.1);
    }
    75% {
        font-size: calc(var(--dynamic-font-size) + 0px);
        transform: scale(1);
    }
    90% {
        font-size: calc(var(--dynamic-font-size) + 0px);
        transform: scale(1.05);
    }

    100% {
        font-size: calc(var(--dynamic-font-size) + 0px);
        transform: scale(1);
    }
`;

export const headBounceFontSize = keyframes`
      0% {
        font-size: calc(var(--dynamic-font-size) * 0.8);
      transform: scale(0.95);
      }
    10% { 
      font-size: calc(var(--dynamic-font-size) * 0.6);
      transform: scale(0.9);
    }
    50% {
      font-size: calc(var(--dynamic-font-size) * 0.6);
      transform: scale(1.1);
    }
    75% {
      font-size: calc(var(--dynamic-font-size) * 0.6);
      transform: scale(1);
    }
    90% {
      font-size: calc(var(--dynamic-font-size) * 0.6);
      transform: scale(1.05);
    }

    100% {
      font-size: calc(var(--dynamic-font-size) * 0.6);
      transform: scale(1);
    }
`;

export const headMouseoutAnimation = keyframes`
      0% {
        font-size calc(var(--dynamic-font-size) * 0.8);
        transform: scale(1.12);
      }
    10% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1.25);
    }    
    
    50% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1);
    }   
    63% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1.1);
    }   
    75% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1);
    }  
    90% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1.05);
    }  
    100% { 
    	font-size calc(var(--dynamic-font-size) + 0px);
    	transform: scale(1);
    }  
`;

export const svgBounceFontSize = keyframes`
      0% {
        transform: scale(0.8);

      }
    10% { 
      transform: scale(0.6);
    }
    50% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(0.6);
    }
    90% {
      transform: scale(0.65);
    }

    100% {
      transform: scale(0.6);
    }
`;

export const svgMouseoutAnimation = keyframes`
      0% {
        transform: scale(0.9);

      }
    10% { 
    	transform: scale(1.25);
    }    
    
    50% { 
    	transform: scale(1);
    }   
    63% { 
    	transform: scale(1.1);
    }   
    75% { 
    	transform: scale(1);
    }  
    90% { 
    	transform: scale(1.05);
    }  
    100% { 
    	transform: scale(1);
    }  
`;
