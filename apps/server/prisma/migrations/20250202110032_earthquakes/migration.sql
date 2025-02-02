-- DropTable
DROP TABLE "earthquake";

-- CreateTable
CREATE TABLE "earthquakes" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "magnitude" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "earthquakes_pkey" PRIMARY KEY ("id")
);
