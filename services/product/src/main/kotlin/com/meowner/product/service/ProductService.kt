package com.meowner.product.service

import com.meowner.product.model.ProductResponse
import com.meowner.product.repository.ProductRepository
import org.springframework.stereotype.Service

@Service
class ProductService(private val repository: ProductRepository) {
    fun getProductsByType(type: String): List<ProductResponse> {
        return repository.findByType(type.uppercase()).map {
            ProductResponse(it.name, it.description, it.price, it.imagePath, it.collection)
        }
    }
    fun getProductsByCollection(collection: String): List<ProductResponse> {
        return repository.findByCollection(collection).map {
            ProductResponse(it.name, it.description, it.price, it.imagePath, it.collection)
        }
    }

    fun getProducts(): List<ProductResponse> {
        return repository.findAll().map {
            ProductResponse(it.name, it.description, it.price, it.imagePath, it.collection)
        }
    }
    }