package com.sonidovivo.backend.Security;

import java.util.Date;

import org.springframework.stereotype.Service;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtService {

    private final String SECRET="12a1101dKykczpWXofifO4FHbfgT3c3nLptrKPUM9wEOOqwYLyTYU233ZUj2";

    public String generatedToken(String correo){
        return Jwts.builder()
                .setSubject(correo)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+86400000))
                .compact();
    }

    public String exactCorreo(String token){
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}
