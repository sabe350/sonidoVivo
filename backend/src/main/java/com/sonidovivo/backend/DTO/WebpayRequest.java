package com.sonidovivo.backend.DTO;

import lombok.Data;

import java.util.List;

@Data
public class WebpayRequest {
    private List<ItemRequest> items;
}
