package com.sonidovivo.backend.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "transbank")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransbankProperties {
    private String commerceCode;
    private String apiKey;
}
