import {
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateDestinationDto {
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(150)
  location: string;

  @IsOptional()
  @IsIn(['Laut', 'Gunung', 'Budaya', 'Alam'])
  tag?: 'Laut' | 'Gunung' | 'Budaya' | 'Alam';

  @IsOptional()
  @IsString()
  image?: string;

  @IsString()
  @MinLength(5)
  @MaxLength(1000)
  description: string;
}
