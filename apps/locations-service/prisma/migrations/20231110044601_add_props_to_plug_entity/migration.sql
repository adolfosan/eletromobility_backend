/*
  Warnings:

  - Added the required column `format` to the `PlugEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_amperage` to the `PlugEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_voltage` to the `PlugEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_type` to the `PlugEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `standard` to the `PlugEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlugEntity" ADD COLUMN     "format" TEXT NOT NULL,
ADD COLUMN     "max_amperage" INTEGER NOT NULL,
ADD COLUMN     "max_voltage" INTEGER NOT NULL,
ADD COLUMN     "power_type" TEXT NOT NULL,
ADD COLUMN     "standard" TEXT NOT NULL;
