package com.meowner.user.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController {

    @GetMapping("/hello")
    @CrossOrigin(origins = arrayOf("http://localhost:3000"))
    fun sayHello(): Map<String, String> {
        return mapOf("data" to "mim")
    }
}