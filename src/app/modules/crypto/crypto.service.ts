import { Crypto } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Crypto): Promise<Crypto> => {
  const result = await prisma.crypto.create({
    data,
  });

  return result;
};

const getAllFromDB = async (): Promise<Crypto[]> => {
  const result = await prisma.crypto.findMany({});
  return result;
};

const getDataById = async (id: string): Promise<Crypto | null> => {
  const result = await prisma.crypto.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Crypto>
): Promise<Crypto> => {
  const result = await prisma.crypto.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Crypto> => {
  const result = await prisma.crypto.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CryptoService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
};
