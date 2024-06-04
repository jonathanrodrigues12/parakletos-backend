/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `peoples` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `peoples` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `peoples` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `peoples` table. All the data in the column will be lost.
  - Added the required column `deleted_at` to the `peoples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `peoples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marital_status` to the `peoples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `peoples` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `peoples_name_lastName_document_email_idx` ON `peoples`;

-- AlterTable
ALTER TABLE `peoples` DROP COLUMN `deletedAt`,
    DROP COLUMN `lastName`,
    DROP COLUMN `maritalStatus`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `marital_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Permission` (
    `id` VARCHAR(191) NOT NULL,
    `people_id` VARCHAR(191) NOT NULL,
    `create` BOOLEAN NOT NULL,
    `read` BOOLEAN NOT NULL,
    `update` BOOLEAN NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Permission_people_id_key`(`people_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `peoples_name_last_name_document_email_idx` ON `peoples`(`name`, `last_name`, `document`, `email`);

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_people_id_fkey` FOREIGN KEY (`people_id`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
