package com.meowner.product.repository

import com.meowner.product.model.ProductEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository : JpaRepository<ProductEntity, Long> {
    fun findByType(type: String): List<ProductEntity>
}