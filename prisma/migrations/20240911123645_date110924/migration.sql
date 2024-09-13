-- CreateTable
CREATE TABLE "Game" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "releasedate" TEXT NOT NULL,
    "description" TEXT,
    "developer" TEXT NOT NULL,
    "distributor" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "link" TEXT,
    "platform" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_Id_key" ON "Game"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Game_name_key" ON "Game"("name");
