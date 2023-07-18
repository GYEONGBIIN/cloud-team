-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cr
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `busan`
--

DROP TABLE IF EXISTS `busan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `busan` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `busan`
--

LOCK TABLES `busan` WRITE;
/*!40000 ALTER TABLE `busan` DISABLE KEYS */;
INSERT INTO `busan` VALUES ('샤넬 디올 가방들 정리합니다','100원','부산 해운대구 우제2동',112,'63','images/bs/bsimg0.jpg'),('크록스 새제품팝니다','28,000원','부산 기장군 정관읍',14,'39','images/bs/bsimg1.jpg'),('가져가주세요ㅠㅠ','5,000원','부산 서구 암남동',12,'7','images/bs/bsimg2.jpg'),('이사가면서 가전정리합니다(세탁기,장농 밥솥장 건조기)','30,000원','부산 수영구 망미제2동',16,'23','images/bs/bsimg3.jpg'),('보아르 제습기','50,000원','부산 부산진구 범천동',8,'12','images/bs/bsimg4.jpg'),('백태콩,검은콩','10,000원','부산 북구 금곡동',3,'11','images/bs/bsimg5.jpg'),('베트남 동 판매합니다','197,000원','부산 남구 대연제3동',9,'13','images/bs/bsimg6.jpg'),('헌터 레인부츠','160,000원','부산 남구 대연제1동',17,'20','images/bs/bsimg7.jpg'),('5단렉선반','20,000원','부산 동래구 사직동',12,'10','images/bs/bsimg9.jpg'),('sk매직 전자레인지','20,000원','부산 연제구 연산동',4,'7','images/bs/bsimg10.jpg'),('삼성공기청정기','20,000원','부산 부산진구 부암제3동',4,'5','images/bs/bsimg11.jpg'),('참기름','3,000원','부산 남구 대연제6동',11,'30','images/bs/bsimg12.jpg'),('베베드피노 모자','15,000원','부산 부산진구 당감동',1,'13','images/bs/bsimg13.jpg'),('접이식 자전거','10,000원','부산 해운대구 우동',6,'8','images/bs/bsimg14.jpg'),('에어팟 프로2','80,000원','부산 수영구 망미동',12,'11','images/bs/bsimg15.jpg'),('갤럭시 S21','280,000원','부산 부산진구 가야제1동',6,'7','images/bs/bsimg16.jpg'),('SK매직 식기세척기 6인용','10,000원','부산 서구 서대신제3동',15,'15','images/bs/bsimg17.jpg'),('워치5 40미리 골프에디션','150,000원','부산 부산진구 부전동',6,'11','images/bs/bsimg18.jpg'),('lg코드제로 청소기','40,000원','부산 북구 구포동',11,'1','images/bs/bsimg19.jpg'),('베트남 동 팔아요','106,000원','부산 동래구 명장제1동',2,'10','images/bs/bsimg20.jpg'),('먹태깡 새거 정가 판매합니다','1,700원','부산 부산진구 전포동',6,'7','images/bs/bsimg21.jpg'),('다이슨 공기청정기','100,000원','부산 동래구 온천동',9,'5','images/bs/bsimg22.jpg'),('테라스 파라솔+라탄테이블+의자','130,000원','부산 강서구 명지1동',21,'2','images/bs/bsimg23.jpg'),('원도우냉장고','100,000원','부산 연제구 거제동',5,'11','images/bs/bsimg24.jpg'),('위닉스 제습기 17L 팝니다','230,000원','부산 부산진구 개금제3동',7,'7','images/bs/bsimg25.jpg'),('롯데 제습기','90,000원','부산 부산진구 부전동',1,'10','images/bs/bsimg26.jpg'),('쌀 팔아요','6,000원','부산 부산진구 연지동',1,'7','images/bs/bsimg27.jpg'),('5단선반','5,000원','부산 동구 초량동',10,'13','images/bs/bsimg28.jpg'),('lg 65인치 tv  부품용/수리해서 쓰실 분','10,000원','부산 동구 범일동',8,'5','images/bs/bsimg29.jpg'),('스텔스2  3번우드','90,000원','부산 북구 구포동',8,'3','images/bs/bsimg30.jpg'),('젝시오11 xxio 여자골프채 아이언세트(mp1100)','270,000원','부산 연제구 연산동',25,'2','images/bs/bsimg31.jpg'),('삼성 43인치 티비 팝니다','150,000원','부산 해운대구 좌동',14,'11','images/bs/bsimg32.jpg'),('파김치 2.5kg','10,000원','부산 부산진구 전포동',4,'4','images/bs/bsimg33.jpg'),('프라다 woc 루비노','300,000원','부산 해운대구 재송제1동',24,'5','images/bs/bsimg34.jpg'),('위닉스 10리터 제습기','90,000원','부산 연제구 연산제9동',9,'7','images/bs/bsimg35.jpg'),('에어컨 필요하신분','50,000원','부산 사하구 감천동',2,'5','images/bs/bsimg37.jpg'),('여자 버버리 패딩 (완벽 깨끗 최상급 상태)','480,000원','부산 연제구 거제동',11,'4','images/bs/bsimg38.jpg'),('크로우 도쿄나인 미니벨로 접이식자전거','100,000원','부산 수영구 망미동',13,'3','images/bs/bsimg39.jpg'),('위닉스 제습기 10L팔아요','150,000원','부산 북구 덕천동',90,'80','images/bs/bsimg40.jpg'),('딥디크 롬브르단도 퍼퓸 (2023.07.07)','30,000원','부산 남구 대연제3동',5,'3','images/bs/bsimg41.jpg'),('삼성전자레인지','15,000원','부산 중구 대청동',1,'11','images/bs/bsimg42.jpg'),('18k 금팔찌 팝니다','235,000원','부산 수영구 망미제1동',4,'9','images/bs/bsimg43.jpg'),('보다나 판고데기','15,000원','부산 연제구 거제제3동',6,'8','images/bs/bsimg44.jpg'),('캠핑 테이블','3,000원','부산 동구 초량동',6,'4','images/bs/bsimg45.jpg'),('영아다중','20,000원','부산 해운대구 우동',2,'6','images/bs/bsimg46.jpg'),('3단 선반 판매합니다','5,000원','부산 연제구 연산제1동',9,'8','images/bs/bsimg47.jpg'),('파파야나인 포르쉐 푸쉬카','40,000원','부산 사하구 다대제1동',4,'8','images/bs/bsimg48.jpg'),('캐리어 10평형 에어컨 판매[5만]','50,000원','부산 부산진구 당감제4동',2,'16','images/bs/bsimg49.jpg'),('인조잔디, 잔디매트','15,000원','부산 부산진구 부전제2동',10,'9','images/bs/bsimg50.jpg'),('발렌시아가 후드티 사이즈 L','150,000원','부산 북구 만덕동',18,'18','images/bs/bsimg51.jpg'),('헌터 레인부츠 37 사이즈','30,000원','부산 북구 화명동',3,'6','images/bs/bsimg52.jpg'),('이케아 레르베리 남색 철제 선반','17,000원','부산 연제구 연산제8동',3,'3','images/bs/bsimg53.jpg'),('위니아 제습기','100,000원','부산 남구 대연동',4,'12','images/bs/bsimg54.jpg'),('삼성 무선청소기','30,000원','부산 연제구 연산동',14,'9','images/bs/bsimg55.jpg'),('롯데워터파크 골드시즌 종일권팝니다 2인단위','35,000원','부산 강서구 명지2동',25,'23','images/bs/bsimg56.jpg'),('아난티 힐튼 부산','300,000원','부산 동래구 수민동',18,'8','images/bs/bsimg57.jpg'),('베베드피노모자','10,000원','부산 사상구 괘법동',1,'8','images/bs/bsimg58.jpg'),('장농판매합니다','50,000원','부산 연제구 연산제9동',3,'4','images/bs/bsimg59.jpg'),('전자렌지','20,000원','부산 동래구 명륜동',16,'12','images/bs/bsimg60.jpg'),('조말론 향수, 존 바바토스','10,000원','부산 남구 대연동',4,'5','images/bs/bsimg61.jpg'),('투명 접의식 의자 팝니다~~!!','10,000원','부산 북구 덕천제2동',10,'13','images/bs/bsimg62.jpg'),('이사해서 정리합니다.','30,000원','부산 서구 남부민동',2,'2','images/bs/bsimg63.jpg'),('위닉스 제습기','160,000원','부산 부산진구 연지동',7,'4','images/bs/bsimg64.jpg'),('선풍기 팝니다','10,000원','부산 해운대구 우제3동',5,'10','images/bs/bsimg65.jpg'),('싸게팝니다','1원','부산 연제구 연산제8동',5,'7','images/bs/bsimg66.jpg'),('두나 리크 트라이크 세발자전거 (로얄블루)','50,000원','부산 해운대구 재송제1동',4,'6','images/bs/bsimg67.jpg'),('리안 바구니카시트','10,000원','부산 부산진구 범천동',7,'6','images/bs/bsimg68.jpg'),('《이사처분》LG디오스 스탠드 김치냉장고','380,000원','부산 북구 화명제1동',7,'3','images/bs/bsimg69.jpg'),('프뢰벨 영아다중','80,000원','부산 수영구 수영동',1,'6','images/bs/bsimg70.jpg'),('갤럭시 노트10 판매합니다','150,000원','부산 부산진구 부암동',6,'4','images/bs/bsimg71.jpg'),('압력솥','18,000원','부산 강서구 명지동',5,'3','images/bs/bsimg72.jpg'),('식당 업소용 싱크대 판매 (사이즈 많음)','30,000원','부산 연제구 거제동',44,'32','images/bs/bsimg73.jpg'),('미니제습기팝니다','30,000원','부산 부산진구 초읍동',3,'3','images/bs/bsimg74.jpg'),('원목테이블과 의자','10,000원','부산 남구 대연제6동',12,'9','images/bs/bsimg75.jpg'),('냉장고','50,000원','부산 기장군 정관읍',5,'8','images/bs/bsimg76.jpg'),('선풍기','10원','부산 강서구 명지2동',2,'5','images/bs/bsimg77.jpg'),('퓨어코치 미니제습기','14,000원','부산 기장군 일광읍',4,'4','images/bs/bsimg78.jpg'),('BMW보스턴백 새거','20,000원','부산 강서구 명지동',5,'4','images/bs/bsimg79.jpg'),('추피의 생활동화 세이펜 버전','60,000원','부산 사하구 괴정동',1,'7','images/bs/bsimg80.jpg'),('LG 제습기','100,000원','부산 영도구 동삼제1동',0,'3','images/bs/bsimg81.jpg'),('LG 엘지 냉장고 237L','150,000원','부산 부산진구 전포제2동',3,'6','images/bs/bsimg82.jpg'),('추피 생활이야기 70권 세이펜버전','75,000원','부산 사상구 괘법동',6,'7','images/bs/bsimg84.jpg'),('18k 반지','270,000원','부산 부산진구 전포제2동',7,'6','images/bs/bsimg85.jpg'),('TV 티비  58인치','120,000원','부산 동래구 온천제1동',10,'4','images/bs/bsimg86.jpg'),('휘슬러 냄비 셋  팔아요','100,000원','부산 남구 용호동',12,'1','images/bs/bsimg87.jpg'),('코아존 보닉 고압세척기','80,000원','부산 동구 범일동',5,'3','images/bs/bsimg88.jpg'),('디엘티 65인치 LED TV','200,000원','부산 동구 수정동',8,'5','images/bs/bsimg89.jpg'),('긴급!! 쌀떡볶이떡 팝니다ㅠㅠ','7,000원','부산 해운대구 우동',30,'11','images/bs/bsimg91.jpg'),('자동차 자가정비 할때 쓰던 공구들 일괄정리 합니다.','30,000원','부산 수영구 광안제2동',4,'2','images/bs/bsimg92.jpg'),('콜라!! 가져가세요^^','8,000원','부산 부산진구 범천제1동',7,'5','images/bs/bsimg93.jpg'),('셀린느 에코백 스트라이프 에코백','60,000원','부산 연제구 연산제2동',63,'6','images/bs/bsimg94.jpg'),('크록스 260','28,000원','부산 해운대구 우제1동',7,'7','images/bs/bsimg95.jpg');
/*!40000 ALTER TABLE `busan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:21:29
