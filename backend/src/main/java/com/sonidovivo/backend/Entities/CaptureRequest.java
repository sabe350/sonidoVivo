package com.sonidovivo.backend.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CaptureRequest {
    private String buyOrder;
    private String authorizationCode;
    private Double amount;
}
