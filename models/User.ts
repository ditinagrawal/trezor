import mongoose, { Schema, Document } from "mongoose";

interface Vault extends Document {
  userId: string;
  name: string;
  message: string;
  mediaURL: string;
  unlockDate: Date;
  createdAt: Date;
  status: string;
}

interface User extends Document {
  name: string;
  email: string;
  image: string;
  vaults: Vault[];
}

const VaultSchema: Schema<Vault> = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  mediaURL: { type: String, required: true },
  unlockDate: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  status: { type: String, required: true },
});

const UserSchema: Schema<User> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  vaults: { type: [VaultSchema] },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
