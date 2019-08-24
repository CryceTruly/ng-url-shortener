import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.setGlobalPrefix('api');
	const port=process.env.PORT || 4200
	await app.listen(port);
}
bootstrap();
