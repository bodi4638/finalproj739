//package com.seis;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.ModelAndView;
//
//@Controller
//public class Gatekeeper {
//
//    @Autowired
//    private LoginInfo loginInfo;
//
//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public ModelAndView saveCredentials(@RequestParam String username, @RequestParam String password) {
//        // Perform server-side validation of username and password here
//
//        // Save username and password to a database
//        loginInfo.saveCredentials(username, password);
//
//        // Return the name of the view to render
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.setViewName("success");
//        modelAndView.addObject("message", "Credentials saved successfully");
//
//        return modelAndView;
//    }
//}
