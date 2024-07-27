package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.demo,"+"com.pratyush.config,"+"com.pratyush.controller,"+"Scom.pratyush.models") // Specify the base package to scan
public class ChatappApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChatappApplication.class, args);
    }
}
