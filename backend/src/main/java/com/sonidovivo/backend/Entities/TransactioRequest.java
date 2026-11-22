package com.sonidovivo.backend.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactioRequest {
    private String buyOrder;
    private String sessionId;
    private Double amount;
    private String returnUrl;
}
