package com.meowner.product.controller

import com.meowner.product.service.ProductService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class ProductController(private val productService: ProductService) {

    @GetMapping("/get-products")
    @CrossOrigin(origins = arrayOf("http://localhost:3000"))
    fun getProduct(): Map<String, String> {
        return mapOf("data" to "mim")
    }

    @GetMapping("/get-product/{type}")
    @CrossOrigin(origins = arrayOf("*"))
    fun getProduct(@PathVariable type: String) = productService.getProductsByType(type)

}