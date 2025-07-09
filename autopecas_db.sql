CREATE DATABASE IF NOT EXISTS autopecas_db;
USE autopecas_db;
SHOW TABLES;
CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'liss0066';
GRANT ALL PRIVILEGES ON `autopecas_db`.* TO 'root'@'127.0.0.1';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'root'@'127.0.0.1';
SELECT DATABASE ();

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    fabricante VARCHAR(100),
    preco DECIMAL(10,2),
    estoque INT,
    imagem VARCHAR(255)
);

INSERT INTO produtos (nome, fabricante, preco, estoque) VALUES
('Pastilha de Freio Dianteira Audi A4', 'Bosch', 389.90, 12),
('Filtro de Ar BMW Série 3', 'Mann-Filter', 149.50, 20),
('Vela de Ignição Mercedes-Benz C200', 'NGK', 89.99, 50),
('Amortecedor Traseiro Volvo XC60', 'Monroe', 729.00, 8),
('Disco de Freio Dianteiro BMW X1', 'Fremax', 499.90, 14),
('Bateria AGM 70Ah Land Rover Evoque', 'Heliar', 1299.00, 5),
('Sensor de Estacionamento Porsche Cayenne', 'Bosch', 349.90, 6),
('Filtro de Combustível Audi Q5', 'Mahle', 189.00, 25),
('Correia Dentada Mini Cooper', 'Continental', 219.90, 18),
('Farol Dianteiro Esquerdo BMW 320i', 'Magneti Marelli', 1899.00, 4),
('Kit Embreagem Mercedes-Benz Classe A', 'Luk', 2100.00, 3),
('Radiador de Motor Audi A3', 'Valeo', 780.00, 7),
('Bomba de Combustível Jaguar XE', 'Delphi', 950.00, 6),
('Retrovisor Elétrico Direito BMW X5', 'Febi Bilstein', 1250.00, 3),
('Sensor ABS Traseiro Volvo S60', 'Bosch', 295.00, 10),
('Parafuso de Roda Mercedes GLA', 'Febi Bilstein', 35.00, 100),
('Kit de Suspensão Dianteira Land Rover Freelander', 'Monroe', 2500.00, 2),
('Escapamento Esportivo Audi TT', 'Borla', 3800.00, 1),
('Palheta Dianteira BMW Z4', 'Bosch', 89.90, 30),
('Tampa de Válvula Jaguar F-Pace', 'Mahle', 399.00, 9);
