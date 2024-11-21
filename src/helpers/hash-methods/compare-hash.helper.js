import bcrypt from 'bcrypt'

export const compareHash = async(password, hash) =>{
  return await bcrypt.compare(password, hash);
}