package com.meowner.product.model

import java.math.BigDecimal

data class ProductResponse(
    val name: String,        // Becomes "name" in JSON
    val description: String, // Becomes "description" in JSON
    val price: BigDecimal,
    val imagePath: String,
    val collection: String
)