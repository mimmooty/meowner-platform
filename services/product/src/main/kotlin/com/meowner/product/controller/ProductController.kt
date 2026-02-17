package com.meowner.product.controller

import com.meowner.product.service.ProductService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class ProductController(private val productService: ProductService) {

    @GetMapping("/get-product")
    @CrossOrigin(origins = arrayOf("*"))
    fun getProductByType() = productService.getProducts()

    @GetMapping("/get-product-by-type/{type}")
    @CrossOrigin(origins = arrayOf("*"))
    fun getProductByType(@PathVariable type: String) = productService.getProductsByType(type)

    @GetMapping("/get-product-by-collection/{collection}")
    @CrossOrigin(origins = arrayOf("*"))
    fun getProductByCollection(@PathVariable  collection: String) = productService.getProductsByCollection(collection)
}