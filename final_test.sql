-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 19, 2024 lúc 05:05 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `final_test`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `role`, `password`, `created_at`, `updated_at`) VALUES
(1, 'ggg', 'ggg@gmail.com', 'admin', '$2y$10$gkhIippjHq3Ktl/iCzX0WeAbyKIzMJpajARPmERVcwVxwxbWtK4/G', '2024-06-18 06:14:04', '2024-06-18 06:14:04'),
(2, 'admin', 'admin@gmail.com', NULL, '$2y$10$gVqkUv.CiyacRMSA9qQ.ZutqWF5BWnDIwwdzdJB/HYaUSI015qEb2', '2024-06-18 19:35:20', '2024-06-18 19:35:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categories_id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `categories_id`, `value`, `created_at`, `updated_at`) VALUES
(1, 1, 'Laptop', '2024-06-18 14:35:22', '2024-06-18 14:35:22'),
(2, 2, 'Ghế Gaming', '2024-06-18 14:35:22', '2024-06-18 14:35:22'),
(3, 3, 'Tai Nghe', '2024-06-18 14:35:22', '2024-06-18 14:35:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `checkout`
--

CREATE TABLE `checkout` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orderstatus_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `checkout`
--

INSERT INTO `checkout` (`id`, `user_id`, `total_price`, `created_at`, `updated_at`, `orderstatus_id`) VALUES
(1, 1, 2000, '2024-06-18 08:35:42', '2024-06-18 10:03:14', 2),
(2, 1, 11000, '2024-06-18 09:18:19', '2024-06-18 09:18:19', 1),
(3, 1, 30000, '2024-06-18 09:48:49', '2024-06-18 09:48:49', 1),
(4, 1, 20000000, '2024-06-18 19:02:56', '2024-06-18 19:02:56', 1),
(5, 1, 20000000, '2024-06-18 19:13:02', '2024-06-18 19:40:54', 2),
(6, 1, 1000, '2024-06-18 19:57:18', '2024-06-18 19:57:18', 1),
(7, 1, 10000000, '2024-06-18 20:11:35', '2024-06-18 20:11:35', 1),
(8, 4, 10000, '2024-06-19 01:08:04', '2024-06-19 01:08:04', 1),
(9, 4, 1000, '2024-06-19 03:46:09', '2024-06-19 03:46:09', 1),
(10, 4, 10000000, '2024-06-19 03:48:50', '2024-06-19 03:48:50', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`id`, `name`, `img`, `gender`, `email`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(1, 'abcd', '\"1718794980_Screenshot 2024-06-19 174234.png\"', 'Nam', 'abcd@gmail.com', '0123456789', 'Phenikaa', '2024-06-18 19:33:53', '2024-06-19 04:03:00'),
(2, 'hh', '\"1718795008_Screenshot 2024-06-19 175641.png\"', 'Nữ', 'hh@gmail.com', '0987654321', 'CNTT', '2024-06-18 19:34:11', '2024-06-19 04:03:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_06_07_081731_create_products_table', 1),
(6, '2024_06_07_081738_create_shopping_cart_table', 1),
(7, '2024_06_07_081743_create_checkout_table', 1),
(8, '2024_06_07_081747_create_order_table', 1),
(9, '2024_06_07_081750_create_admin_table', 1),
(10, '2024_06_07_081754_create_customers_table', 1),
(11, '2024_06_07_081757_create_staffs_table', 1),
(12, '2024_06_07_092140_create_categories_table', 1),
(13, '2024_06_10_061213_create_wishlists_table', 1),
(14, '2024_06_13_145411_create_product_details_table', 1),
(15, '2024_06_18_153326_create_order_status_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `checkout_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `code`, `product_id`, `checkout_id`, `quantity`, `total_price`, `created_at`, `updated_at`) VALUES
(1, '5h6neaqfz', 1, 1, 2, 2000, '2024-06-18 08:35:42', '2024-06-18 08:35:42'),
(2, 'geuqqixco', 1, 2, 1, 1000, '2024-06-18 09:18:19', '2024-06-18 09:18:19'),
(3, 'geuqqixco', 2, 2, 1, 10000, '2024-06-18 09:18:19', '2024-06-18 09:18:19'),
(4, 'e7a3sobl6', 2, 3, 3, 30000, '2024-06-18 09:48:49', '2024-06-18 09:48:49'),
(5, 'asaxk00qd', 3, 4, 2, 20000000, '2024-06-18 19:02:56', '2024-06-18 19:02:56'),
(6, 'jjslruzqe', 3, 5, 2, 20000000, '2024-06-18 19:13:02', '2024-06-18 19:13:02'),
(7, '8l5vi101t', 1, 6, 1, 1000, '2024-06-18 19:57:18', '2024-06-18 19:57:18'),
(8, 'um66ciaov', 3, 7, 1, 10000000, '2024-06-18 20:11:35', '2024-06-18 20:11:35'),
(9, '67iohhx8e', 2, 8, 1, 10000, '2024-06-19 01:08:04', '2024-06-19 01:08:04'),
(10, 'cvgo2ytzn', 1, 9, 1, 1000, '2024-06-19 03:46:09', '2024-06-19 03:46:09'),
(11, 'knkabwrxg', 3, 10, 1, 10000000, '2024-06-19 03:48:50', '2024-06-19 03:48:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_status`
--

CREATE TABLE `order_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `value` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_status`
--

INSERT INTO `order_status` (`id`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Pending', '2024-06-18 15:42:57', '2024-06-18 15:42:57'),
(2, 'Processing', '2024-06-18 15:42:57', '2024-06-18 15:42:57'),
(3, 'Completed', '2024-06-18 15:42:57', '2024-06-18 15:42:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '94d70361301918acbc491d0d5b82619fa1a251180d8fd476663a27aea3ea8aa1', '[\"*\"]', NULL, NULL, '2024-06-18 06:25:41', '2024-06-18 06:25:41'),
(3, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '4a7a9dc75748e90ab8b4b2448afa8332c498fa28b8899a33584a4abcb4bcf829', '[\"*\"]', NULL, NULL, '2024-06-18 06:30:55', '2024-06-18 06:30:55'),
(4, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '35def4a84eff422b9db0011fa6eed6eacdb3ccbbe38e1f8c7ed39cb2f2863f2e', '[\"*\"]', NULL, NULL, '2024-06-18 06:31:00', '2024-06-18 06:31:00'),
(5, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '540474da578ac907fc68f5bbfedcd83776dc75d38147d59dd29fbbc38545d37f', '[\"*\"]', NULL, NULL, '2024-06-18 06:32:13', '2024-06-18 06:32:13'),
(6, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'e42b0a03ceddd7cf0721b6d20ecadfd5ebafe9f6c2c64dd3b06c34aa2d8a2b96', '[\"*\"]', NULL, NULL, '2024-06-18 06:32:19', '2024-06-18 06:32:19'),
(7, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '1c0c8bd6e5cab61f18d302c0dde74fbea03ef9c6e3e8dc055638a2bef0a05430', '[\"*\"]', NULL, NULL, '2024-06-18 06:32:47', '2024-06-18 06:32:47'),
(8, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '308fbcb5e5651d692a07341fb86c41442a5157be71ac040878b43a65de323603', '[\"*\"]', NULL, NULL, '2024-06-18 06:44:58', '2024-06-18 06:44:58'),
(9, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'dfdc82e51d07d909fbc725dd6590678934a7d4005b6610abd33c21c1d1dec0bd', '[\"*\"]', NULL, NULL, '2024-06-18 06:46:51', '2024-06-18 06:46:51'),
(10, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'd11ffa9c9403da688e301dbee797e459ef435d6ec3227e6ce972ae4374606110', '[\"*\"]', NULL, NULL, '2024-06-18 06:57:37', '2024-06-18 06:57:37'),
(12, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '3b01ad7eab515461f57fda2b89bc34d37e68e87a56b9e14e93d7325f7c3dfea3', '[\"*\"]', NULL, NULL, '2024-06-18 07:43:21', '2024-06-18 07:43:21'),
(14, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '2430df7516e90eacf96483c10c9cdb214ae4c4ee446511de7a2ce3e6422eaad5', '[\"*\"]', NULL, NULL, '2024-06-18 10:12:21', '2024-06-18 10:12:21'),
(15, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'ca022abc5fb22cc82cf2b5ad934ee30528a761e61f49b6ee5a2427f4d5c611f7', '[\"*\"]', NULL, NULL, '2024-06-18 11:15:30', '2024-06-18 11:15:30'),
(16, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '4996bb643bcf7612e018ded1fdc2e105e61df4110ef8d4bfa627f6b7f72139ea', '[\"*\"]', NULL, NULL, '2024-06-18 11:17:40', '2024-06-18 11:17:40'),
(17, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'd373e6e782966c75250779f3fe932b812dc952108a58e132317267cf62284bf0', '[\"*\"]', NULL, NULL, '2024-06-18 11:22:40', '2024-06-18 11:22:40'),
(18, 'App\\Models\\Admin', 1, 'ggg-AuthToken', 'aa0c4edf2890c88215e6fa1dbaca549108cf3f530a70abef365862331e802b85', '[\"*\"]', NULL, NULL, '2024-06-18 11:24:38', '2024-06-18 11:24:38'),
(20, 'App\\Models\\User', 1, 'hung-AuthToken', 'b6b50e1396158fa4496e831d16e685630bbaff3a87feeaadd0642f7b49144b86', '[\"*\"]', NULL, NULL, '2024-06-18 19:12:15', '2024-06-18 19:12:15'),
(21, 'App\\Models\\Admin', 1, 'ggg-AuthToken', '1268cb5eaf6b8e4ccc7198bcb48f27f43e2240c912e013c42b365d416affd4e6', '[\"*\"]', NULL, NULL, '2024-06-18 19:13:16', '2024-06-18 19:13:16'),
(22, 'App\\Models\\Admin', 2, 'admin-AuthToken', '4f0c086488aeb3b090ddf7059fe75cdd1c30e6571f3f595770b37a252677f2e8', '[\"*\"]', NULL, NULL, '2024-06-18 19:35:37', '2024-06-18 19:35:37'),
(23, 'App\\Models\\Admin', 2, 'admin-AuthToken', '0add05049d37439f198373c7189fb479275102ae5276fc5398e7a688fc506786', '[\"*\"]', NULL, NULL, '2024-06-18 19:58:15', '2024-06-18 19:58:15'),
(26, 'App\\Models\\Admin', 2, 'admin-AuthToken', '64a5366d5cdadb8fdb9f2aab67e866ce08070f39ba425aa77fbf3e1d8ff34add', '[\"*\"]', NULL, NULL, '2024-06-19 01:08:24', '2024-06-19 01:08:24'),
(28, 'App\\Models\\User', 4, 'abcd-AuthToken', '1057256c545df4304d48216fe15194ae3724b5d71e61024970c90c3c886688f2', '[\"*\"]', NULL, NULL, '2024-06-19 03:43:34', '2024-06-19 03:43:34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `img` text NOT NULL,
  `quantity` double NOT NULL,
  `description` text NOT NULL,
  `color` varchar(255) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `img`, `quantity`, `description`, `color`, `categories_id`, `created_at`, `updated_at`) VALUES
(1, 'Laptop gaming ASUS ROG Strix G16 G614JU N3135W1', 1000, '[\"images\\/667248be8747c_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\",\"images\\/66719b697c865_638147328206711909_asus-tuf-gaming-fx506h-den-dd.jpg\",\"images\\/66719b697d0a6_638147328206711909_asus-tuf-gaming-fx506h-den-dd.jpg\",\"images\\/66719b697da04_638147328206711909_asus-tuf-gaming-fx506h-den-dd.jpg\",\"images\\/66719b697e0e4_638147328206711909_asus-tuf-gaming-fx506h-den-dd.jpg\"]', 100, 'Laptop gaming ASUS ROG Strix G16 G614JU N3135W', 'Black', 1, '2024-06-18 07:36:25', '2024-06-19 03:53:04'),
(2, 'ssssss', 10000, '[\"images\\/6671b2e12c2a5_10051622-tai-nghe-blth-philips-tah5205bk-00-den-1.jpg\",\"images\\/6671b2e12c896_10051622-tai-nghe-blth-philips-tah5205bk-00-den-1.jpg\",\"images\\/6671b2e12cefa_10051622-tai-nghe-blth-philips-tah5205bk-00-den-1.jpg\",\"images\\/6671b2e12d591_10051622-tai-nghe-blth-philips-tah5205bk-00-den-1.jpg\",\"images\\/6671b2e12dbcf_10051622-tai-nghe-blth-philips-tah5205bk-00-den-1.jpg\"]', 100, 'sssssssss', 'red', 3, '2024-06-18 09:16:33', '2024-06-18 09:16:33'),
(3, 'Lenovo ThinkPad X1 Carbon Gen 6', 10000000, '[\"images\\/66723c1182675_637639340541330187_msi-gaming-gf63-den-1.webp\",\"images\\/66723c1183b9b_637639340541330187_msi-gaming-gf63-den-1.webp\",\"images\\/66723c118435a_637639340541330187_msi-gaming-gf63-den-1.webp\",\"images\\/66723c1184c42_637639340541330187_msi-gaming-gf63-den-1.webp\",\"images\\/66723c11853e8_637639340541330187_msi-gaming-gf63-den-1.webp\"]', 100, 'Lenovo ThinkPad X1 Carbon Gen 6', 'Black', 1, '2024-06-18 19:01:53', '2024-06-18 19:01:53'),
(4, 'Laptop MSI GF63 Thin 12VE-460VN | Core I5-12450H | 8G D4 | 512GB SSD | RTX 4050 6G | 15.6″ FHD 144Hz | Win 11 Home', 20000000, '[\"images\\/667249ae454ab_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\",\"images\\/667249ae46110_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\",\"images\\/667249ae46ba3_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\",\"images\\/667249ae47456_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\",\"images\\/667249ae487a0_69633_hacom_asus_gaming_rog_strix_g513_19.jpg\"]', 100, 'Laptop MSI GF63 Thin 12VE-460VN | Core I5-12450H | 8G D4 | 512GB SSD | RTX 4050 6G | 15.6″ FHD 144Hz | Win 11 Home', 'Black', 1, '2024-06-18 19:59:58', '2024-06-18 19:59:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_details`
--

CREATE TABLE `product_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `CPU` text DEFAULT NULL,
  `RAM` text DEFAULT NULL,
  `HARDWARE` text DEFAULT NULL,
  `CARD` text DEFAULT NULL,
  `MONITOR` text DEFAULT NULL,
  `PIN` text DEFAULT NULL,
  `WEIGHT` text DEFAULT NULL,
  `MATERRIAL` text DEFAULT NULL,
  `LENGHT` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_details`
--

INSERT INTO `product_details` (`id`, `product_id`, `CPU`, `RAM`, `HARDWARE`, `CARD`, `MONITOR`, `PIN`, `WEIGHT`, `MATERRIAL`, `LENGHT`, `created_at`, `updated_at`) VALUES
(1, 1, 'Minhhung', 'sss', 'sss', 'sss', 'sss', 'sss', 'sss', NULL, 'sss', '2024-06-18 07:36:25', '2024-06-18 11:14:51'),
(2, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-18 09:16:33', '2024-06-18 09:16:33'),
(3, 3, '8th Gen Intel® Core™ i7 8550U  1.8Ghz up to 4.0GHz  8MB', '16GB LPDDR3-2133', '256GB M.2 PCIe NVMe Solid State Drive (M.2 SSD)', 'Share Intel® UHD Graphics 620', '14 (1920 x 1080 pixels) inch IPS Anti-Glare - Multi-touch', '3 cell 57Whr', '1.13Kg', NULL, '323.5 mm x 217.1 mm x 15.95 mm / 12.73\" x 8.54\" x 0.62\"', '2024-06-18 19:01:53', '2024-06-18 19:01:53'),
(4, 4, 'sssss', 'sssss', 'ssss', 'ssss', 'sssss', 'ssss', 'sssss', NULL, 'ssss', '2024-06-18 19:59:58', '2024-06-18 19:59:58'),
(5, 5, 'a', 'a', 'a', 'a', 'a', 'a', 'a', NULL, 'a', '2024-06-19 03:53:46', '2024-06-19 03:53:46');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `products_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quantity` double NOT NULL,
  `total_price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staffs`
--

CREATE TABLE `staffs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `staffs`
--

INSERT INTO `staffs` (`id`, `name`, `img`, `gender`, `position`, `created_at`, `updated_at`) VALUES
(2, 'Võ Thị Ba', '\"1718784535_Screenshot 2024-06-18 151452.png\"', 'Nữ', 'Nhân Viên', '2024-06-18 19:35:53', '2024-06-19 01:09:07'),
(3, 'Nguyễn Văn G', '\"1718794677_Screenshot 2024-06-18 152223.png\"', 'Nam', 'Nhân Viên', '2024-06-18 19:39:54', '2024-06-19 03:57:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `address`, `phone`, `image`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'hung', 'hung@gmail.com', 'Quận 1', '0776723790', '1718763150_69633_hacom_asus_gaming_rog_strix_g513_19.jpg', NULL, '$2y$10$soaWKwQ5vZ1mGa2hGH3Wt.BKDHn1pzO4MQtJyDfryerBUxeEGOT9y', NULL, '2024-06-18 06:14:50', '2024-06-18 19:12:32'),
(2, 'thu', 'thu@gmail.com', 'Quan12', '123123', '1718721579_2_2a97e6ad19684a8eb9e78890cb58821e_master.webp', NULL, '$2y$10$hg.zt0WSpnINPXZKRBUnreO55E5hA0xZxoZel9/bkxchyAa61xL0i', NULL, '2024-06-18 07:39:15', '2024-06-18 07:39:52'),
(3, 'abc', 'abc@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$wYySOP1j9Ij1zDuAg7JgbeE8vQjjY8Kt7VpkEYHZ7a4bHVT1hFsBC', NULL, '2024-06-19 00:39:24', '2024-06-19 00:39:24'),
(4, 'abcd', 'abcd@gmail.com', 'sos', '0123456789', NULL, NULL, '$2y$10$IsQkOabS70lwsUAJl.ht.OFM1zdmwEkc2/7wz4x6hPJKuxYHEcJwe', NULL, '2024-06-19 01:07:36', '2024-06-19 01:09:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Chỉ mục cho bảng `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `checkout`
--
ALTER TABLE `checkout`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `staffs`
--
ALTER TABLE `staffs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
