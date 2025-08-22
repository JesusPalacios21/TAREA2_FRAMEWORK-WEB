CREATE DATABASE productos;
USE productos;

CREATE TABLE productos(
  id              INT PRIMARY KEY AUTO_INCREMENT,
  nombre          VARCHAR(100) NOT NULL,
  descripcion     TEXT,
  precio          DECIMAL(10,2) NOT NULL,
  fecha_creacion  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB;

INSERT INTO productos(id, nombre, descripcion, precio) VALUES
  (1, 'Laptop', 'Laptop de 15 pulgadas con 16GB de RAM', 1200.00),
  (2, 'Smartphone', 'Smartphone con pantalla de 6.5 pulgadas y 128GB de almacenamiento', 800.00),
  (3, 'Tablet', 'Tablet con pantalla de 10 pulgadas y lápiz óptico incluido', 600.00),
  (4, 'Monitor', 'Monitor LED de 24 pulgadas con resolución Full HD', 300.00),
  (5, 'Teclado mecánico', 'Teclado mecánico retroiluminado con switches azules', 100.00);

  SELECT * FROM productos;