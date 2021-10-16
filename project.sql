-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 16 Paź 2021, 22:17
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `created_at` date NOT NULL,
  `admin` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `date_born` date NOT NULL,
  `email` text NOT NULL,
  `gender` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) VALUES
(1, 'Arecki23', '$2y$10$BcJUCEe33QA8bDiO8dxM2usxhwTbQ4PzKNOP48qdv5DMhy1J4xvFm', '2021-10-16', 1, 'Arek', 'Guth', '2004-04-23', 'arkadiuszguth@gmail.com', 'm'),
(2, 'Mikołaj', '$2y$10$EzgcGmMh24Vja0sJDfUFc.45PT9f3M99g0J.1Rq.CePm8JGQ7/W6S', '2021-10-16', 1, 'Mikołaj', 'Woźniak', '2004-11-19', 'mikimen321@gmail.com', 'm'),
(3, 'Kacper', '$2y$10$.MMQyCyeXF1rDzCMYaEibukw7kFY4gS2iTIS70fFqmoKXyoF.tPjW', '2021-10-16', 1, 'Kacper', 'Kacper', '2005-09-16', 'kontakt1kacper@gmail.com', 'm'),
(4, 'Janek', '$2y$10$nwyt/mdoyN.bjijUSIIT/.aXhuyYH/Bao8Nq6ytdt81rpfILEt0d2', '2021-10-16', 0, 'Jan ', 'Posadzka', '2004-06-23', 'janekposadzki24na7@posadzki.pl', 'm');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
