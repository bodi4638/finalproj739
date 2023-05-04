package com.seis;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Messenger {

    @GetMapping("/")
    public String home() {
        return "home.html";
    }

    @GetMapping("/home")
    public String home1() {
        return "home.html";
    }

    @GetMapping("/about")
    public String about() {
        return "about.html";
    }

    @GetMapping("/recommend")
    public String recommend() {
        return "recommend.html";
    }

}