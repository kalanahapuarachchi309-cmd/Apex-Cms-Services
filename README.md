# APEX-CMS: Business Domain Microservices

> **GitHub Repository About Description:**
> *Domain business microservices for APEX-CMS containing Customer Service, Vehicle Inventory Service, and Order Processing Service.*

---

## 👨‍🎓 Student & Submission Information

| Field | Details |
| :--- | :--- |
| **Student Name** | Kalana Maduranaga |
| **Student Number** | 241711018 |
| **GCP Project ID** | `apex-cms-506311` |
| **GCP Region** | `asia-south1` (Mumbai) |

---

## 📖 Overview

The **Business Domain Services** implement the core commercial logic of the APEX-CMS dealership management system:

1. **Customer Service**: Customer CRM, contact profiles, validation, and relational persistence in PostgreSQL.
2. **Vehicle Service**: Vehicle fleet inventory, pricing, stock levels, multipart image uploads, and document persistence in MongoDB.
3. **Order Service**: Multi-item customer order placement, total calculation, inter-service stock reduction, and relational persistence in PostgreSQL.

---

## 🧰 Technology Stack

- **Java Version:** Java 25 / OpenJDK 21
- **Core Framework:** Spring Boot 4.1.0, Spring Cloud 2025.1.2
- **Data Persistence:** Spring Data JPA (PostgreSQL), Spring Data MongoDB
- **Service Communication:** Spring Cloud Netflix Eureka, RestClient, MapStruct 1.6.3, Project Lombok

---

## 🚀 Running All Services

Ensure Platform services (Config Server on 9000 & Service Registry on 9001) are running first.

```bash
# Terminal 1: Customer Service
cd services/customer-service
mvn spring-boot:run

# Terminal 2: Vehicle Service
cd services/vehicle-service
mvn spring-boot:run

# Terminal 3: Order Service
cd services/order-service
mvn spring-boot:run
```\n