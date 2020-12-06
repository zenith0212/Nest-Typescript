import { IsString, IsNotEmpty } from 'class-validator';
import Post from '../../posts/post.entity';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  post: Post;
}

export default CreateCommentDto;