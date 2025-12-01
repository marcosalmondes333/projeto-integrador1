import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// SUA STRING REAL AQUI - substitua pelos seus dados
const MONGODB_URI = "mongodb+srv://kansususer:SUA_SENHA@cluster0.SEU_CODIGO.mongodb.net/kansus?retryWrites=true&w=majority";

async function testMongo() {
  try {
    console.log('🔗 Testando conexão com MongoDB Atlas...');
    console.log('📧 Usuário: kansususer');
    console.log('🔑 String:', MONGODB_URI.replace(/:[^:]*@/, ':****@')); // Esconde senha
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conexão bem-sucedida!');
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('📁 Collections encontradas:', collections.length);
    
    await mongoose.connection.close();
    console.log('🔒 Conexão fechada.');
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error.message);
    console.log('💡 Soluções:');
    console.log('1. Verifique se a string está CORRETA');
    console.log('2. Confirme usuário/senha no MongoDB Atlas');
    console.log('3. Verifique se o IP está liberado (0.0.0.0/0)');
    console.log('4. Confirme se o cluster está ativo');
  }
}

testMongo();