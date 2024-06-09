-- AlterTable
ALTER TABLE `logins` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `peoples` MODIFY `gender` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `number` INTEGER NULL,
    MODIFY `complement` VARCHAR(191) NULL,
    MODIFY `neighborhood` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `cep` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL,
    MODIFY `marital_status` VARCHAR(191) NULL,
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `permission` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;
