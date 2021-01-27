-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: webchat
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `conversation`
--

DROP TABLE IF EXISTS `conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversation` (
  `conversation_id` bigint NOT NULL,
  `name_conversation` varchar(255) DEFAULT NULL,
  `single_conversation` bit(1) DEFAULT NULL,
  PRIMARY KEY (`conversation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversation`
--

LOCK TABLES `conversation` WRITE;
/*!40000 ALTER TABLE `conversation` DISABLE KEYS */;
INSERT INTO `conversation` VALUES (1,NULL,_binary ''),(4,NULL,_binary ''),(7,NULL,_binary ''),(10,NULL,_binary ''),(13,NULL,_binary ''),(16,NULL,_binary ''),(19,NULL,_binary ''),(22,NULL,_binary ''),(25,NULL,_binary ''),(28,NULL,_binary ''),(31,NULL,_binary ''),(34,NULL,_binary '');
/*!40000 ALTER TABLE `conversation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (96);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `message_id` bigint NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `conversation_id` bigint DEFAULT NULL,
  `time` datetime(6) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (37,'Chao ban, minh la Duong',1,'2021-01-24 15:55:13.188000','duong'),(38,'Chao ban, minh la Duong',4,'2021-01-24 15:55:54.498000','duong'),(39,'Chao ban, minh la Duong',7,'2021-01-24 15:55:59.388000','duong'),(40,'Chao ban, minh la Duong',10,'2021-01-24 15:56:06.103000','duong'),(41,'Chao ban, minh la Duong',13,'2021-01-24 15:56:13.121000','duong'),(42,'Chao ban, minh la Hai',16,'2021-01-24 15:58:24.448000','hai'),(43,'Chao ban, minh la Hai',4,'2021-01-24 15:58:32.469000','hai'),(44,'Chao ban, minh la Hai',19,'2021-01-24 15:58:37.255000','hai'),(45,'Chao ban, minh la Hai',22,'2021-01-24 15:58:41.300000','hai'),(46,'Chao ban, minh la Hai',25,'2021-01-24 15:58:47.000000','hai'),(47,'Chao ban, minh la Hai',28,'2021-01-24 15:58:59.017000','thu'),(48,'Chao ban, minh la Hai',7,'2021-01-24 15:59:04.071000','thu'),(49,'Chao ban, minh la Hai',19,'2021-01-24 15:59:10.854000','thu'),(50,'Chao ban, minh la Hai',31,'2021-01-24 15:59:18.531000','thu'),(51,'Chao ban, minh la Hai',34,'2021-01-24 15:59:23.183000','thu'),(52,'Chao ban, minh la Hai',1,'2021-01-24 15:59:40.520000','oanh'),(53,'Chao ban, minh la Hai',16,'2021-01-24 15:59:44.920000','oanh'),(54,'Chao ban, minh la Hai',28,'2021-01-24 15:59:50.100000','oanh'),(55,'Chao ban, minh la Son',10,'2021-01-24 16:00:32.496000','son'),(56,'Chao ban, minh la Son',22,'2021-01-24 16:00:37.416000','son'),(57,'Chao ban, minh la Son',34,'2021-01-24 16:00:42.495000','son'),(58,'Chao ban, minh la Son',13,'2021-01-24 16:00:52.917000','nghia'),(59,'Chao ban, minh la Nghia',13,'2021-01-24 16:01:02.278000','nghia'),(60,'Chao ban, minh la Nghia',25,'2021-01-24 16:01:08.603000','nghia'),(61,'Chao ban, minh la Nghia',31,'2021-01-24 16:01:13.913000','nghia'),(62,'Sorry, minh la Thu',28,'2021-01-24 16:08:51.439000','thu'),(63,'Sorry, minh la Thu',7,'2021-01-24 16:08:57.199000','thu'),(64,'Sorry, minh la Thu',19,'2021-01-24 16:09:04.352000','thu'),(65,'Sorry, minh la Thu',31,'2021-01-24 16:09:11.257000','thu'),(66,'Sorry, minh la Thu',34,'2021-01-24 16:09:15.773000','thu'),(67,'Sorry, minh la Oanh',1,'2021-01-24 16:09:31.532000','oanh'),(68,'Sorry, minh la Oanh',16,'2021-01-24 16:09:34.440000','oanh'),(69,'Sorry, minh la Oanh',28,'2021-01-24 16:09:38.437000','oanh'),(70,'M đã làm xong đồ án chưa?',7,'2021-01-24 16:20:13.465000','thu'),(71,'M đã làm xong đồ án chưa?',7,'2021-01-24 16:20:15.989000','thu'),(72,'M đã làm xong đồ án chưa?',7,'2021-01-24 16:20:19.580000','thu'),(73,'T chưa làm xong',7,'2021-01-24 18:12:27.908000','duong'),(74,'Bao giờ m làm xong',7,'2021-01-25 10:20:29.172000','thu'),(75,'Chắc là thứ 3',7,'2021-01-25 10:20:58.090000','duong'),(76,'oke',7,'2021-01-25 10:21:11.451000','thu'),(77,'Thế m có đi ăn tất niên ko?',7,'2021-01-25 10:21:29.014000','duong'),(78,'chắc chắn rồi',7,'2021-01-25 10:21:41.369000','thu'),(79,'oke',7,'2021-01-25 10:21:54.386000','duong'),(80,'hi',7,'2021-01-25 10:22:03.697000','thu'),(81,'M đã đi học chưa?',7,'2021-01-25 10:39:12.419000','thu'),(82,'Mấy giờ mà đã đi học?',7,'2021-01-25 10:39:28.244000','duong'),(83,'Nay học ca 3 đấy',7,'2021-01-25 10:39:40.517000','thu'),(84,'ahi',7,'2021-01-25 12:14:30.930000','thu'),(85,'ơi t đây',7,'2021-01-25 18:01:21.917000','thu'),(86,'ơi',7,'2021-01-25 19:30:11.726000','thu'),(87,'này t bảo',7,'2021-01-25 19:30:19.961000','thu'),(88,'Hải ơi',19,'2021-01-25 19:30:33.851000','thu'),(89,'alo alo',7,'2021-01-25 19:37:25.488000','thu'),(90,'alo alo',19,'2021-01-25 19:45:37.419000','thu'),(91,'',19,'2021-01-25 19:45:37.990000','thu'),(92,'hello',7,'2021-01-25 19:58:52.694000','thu'),(93,'alo',7,'2021-01-25 19:59:09.651000','thu'),(94,'hihi',7,'2021-01-25 19:59:17.235000','thu'),(95,'hihi',28,'2021-01-25 20:11:58.989000','thu');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('cuong','1234'),('duong','1234'),('hai','1234'),('huy','1234'),('nghia','1234'),('oanh','1234'),('son','1234'),('thu','1234'),('truong','1234');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_conversation`
--

DROP TABLE IF EXISTS `user_conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_conversation` (
  `user_conversation_id` bigint NOT NULL,
  `code_conversation` varchar(255) DEFAULT NULL,
  `conversation_id` bigint DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_conversation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_conversation`
--

LOCK TABLES `user_conversation` WRITE;
/*!40000 ALTER TABLE `user_conversation` DISABLE KEYS */;
INSERT INTO `user_conversation` VALUES (2,'oanh',1,'duong'),(3,'duong',1,'oanh'),(5,'hai',4,'duong'),(6,'duong',4,'hai'),(8,'thu',7,'duong'),(9,'duong',7,'thu'),(11,'son',10,'duong'),(12,'duong',10,'son'),(14,'nghia',13,'duong'),(15,'duong',13,'nghia'),(17,'oanh',16,'hai'),(18,'hai',16,'oanh'),(20,'thu',19,'hai'),(21,'hai',19,'thu'),(23,'son',22,'hai'),(24,'hai',22,'son'),(26,'nghia',25,'hai'),(27,'hai',25,'nghia'),(29,'oanh',28,'thu'),(30,'thu',28,'oanh'),(32,'nghia',31,'thu'),(33,'thu',31,'nghia'),(35,'son',34,'thu'),(36,'thu',34,'son');
/*!40000 ALTER TABLE `user_conversation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-25 21:09:55
