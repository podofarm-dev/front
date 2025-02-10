import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Textarea } from '@/components/ui/textarea';

export default function ProblemPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <div className="text-2xl font-semibold underline">[Level 1] 1차 다트게임 - 17688</div>
          <Badge className="rounded-2xl bg-accent text-sm font-normal">홍길동</Badge>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-lg">걸린시간 : 2H 30M</div>
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 rounded-lg border border-bolder px-4 py-8">
        <div className="flex flex-col items-center">
          <div>성능요약</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>구분</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>채점결과</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>제출 일자</div>
          <div>텍스트자리입니다</div>
        </div>
      </div>
      <div className="relative h-[668px] rounded-lg border border-bolder bg-accent p-6">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35}>
            <div>문제</div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              Jokester began sneaking into the castle in the middle of the night and leaving jokes
              all over the place: under the king's pillow, in his soup, even in the royal toilet.
              The king was furious, but he couldn't seem to stop Jokester. And then, one day, the
              people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn't help but laugh. And once they started laughing, they couldn't stop.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero totam ut error fugit.
              Aut maiores explicabo asperiores temporibus provident delectus aperiam perspiciatis,
              consequatur ipsum iure dolores non sint obcaecati laudantium?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nihil deleniti doloremque unde tempore nemo
              praesentium eos iure quaerat, accusamus velit, assumenda suscipit laudantium est
              sapiente dolorum, porro vel quo tempora!lorem Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nemo, recusandae! Consequatur ut deleniti molestias quae, eos nisi
              nobis quod voluptatibus, praesentium porro iste ipsa? Nulla aspernatur molestiae
              ducimus alias soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
              quo voluptate voluptas nulla animi, consequuntur adipisci quidem et eius quia eligendi
              nam libero similique quis reprehenderit architecto placeat! Aperiam? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Voluptatem, vitae iusto optio molestiae
              eaque saepe, necessitatibus accusantium esse, aperiam nemo dolorem expedita? Nihil
              officiis quos architecto commodi assumenda cupiditate fugit. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quos unde pariatur, magnam dolorem, velit eius
              perferendis et accusamus asperiores quisquam repellendus, vitae debitis aliquam
              mollitia reprehenderit rem delectus! Blanditiis, officiis. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Maiores culpa odio cumque obcaecati pariatur delectus,
              harum fugiat et earum laudantium beatae magni nisi cupiditate quis incidunt excepturi
              necessitatibus quasi enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quas ab impedit culpa at, suscipit exercitationem tenetur quasi earum,
              accusamus nostrum dolores? Hic voluptate animi atque, itaque nulla alias rem? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis fugiat atque
              architecto, aspernatur similique nisi. Sunt odio, consequatur neque molestias error
              fuga maiores. Minus voluptas quaerat molestias blanditiis necessitatibus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis quos error odio doloremque
              dolore voluptatum adipisci provident tempora, natus itaque veniam consequatur facilis
              expedita veritatis dicta atque quas hic unde.
            </div>
          </ResizablePanel>
          <ResizableHandle className="mx-6" />
          <ResizablePanel defaultSize={65}>
            <div>Solution.java</div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              Jokester began sneaking into the castle in the middle of the night and leaving jokes
              all over the place: under the king's pillow, in his soup, even in the royal toilet.
              The king was furious, but he couldn't seem to stop Jokester. And then, one day, the
              people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn't help but laugh. And once they started laughing, they couldn't stop.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero totam ut error fugit.
              Aut maiores explicabo asperiores temporibus provident delectus aperiam perspiciatis,
              consequatur ipsum iure dolores non sint obcaecati laudantium?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nihil deleniti doloremque unde tempore nemo
              praesentium eos iure quaerat, accusamus velit, assumenda suscipit laudantium est
              sapiente dolorum, porro vel quo tempora!lorem Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nemo, recusandae! Consequatur ut deleniti molestias quae, eos nisi
              nobis quod voluptatibus, praesentium porro iste ipsa? Nulla aspernatur molestiae
              ducimus alias soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
              quo voluptate voluptas nulla animi, consequuntur adipisci quidem et eius quia eligendi
              nam libero similique quis reprehenderit architecto placeat! Aperiam? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Voluptatem, vitae iusto optio molestiae
              eaque saepe, necessitatibus accusantium esse, aperiam nemo dolorem expedita? Nihil
              officiis quos architecto commodi assumenda cupiditate fugit. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quos unde pariatur, magnam dolorem, velit eius
              perferendis et accusamus asperiores quisquam repellendus, vitae debitis aliquam
              mollitia reprehenderit rem delectus! Blanditiis, officiis. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Maiores culpa odio cumque obcaecati pariatur delectus,
              harum fugiat et earum laudantium beatae magni nisi cupiditate quis incidunt excepturi
              necessitatibus quasi enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quas ab impedit culpa at, suscipit exercitationem tenetur quasi earum,
              accusamus nostrum dolores? Hic voluptate animi atque, itaque nulla alias rem? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis fugiat atque
              architecto, aspernatur similique nisi. Sunt odio, consequatur neque molestias error
              fuga maiores. Minus voluptas quaerat molestias blanditiis necessitatibus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis quos error odio doloremque
              dolore voluptatum adipisci provident tempora, natus itaque veniam consequatur facilis
              expedita veritatis dicta atque quas hic unde.
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="flex flex-col">
        <div className="text-base font-semibold">코멘트</div>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-row justify-between gap-16">
            <div>
              코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.
            </div>
            <div className="flex flex-row gap-2">
              <div>수정</div>
              <div>삭제</div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div>유저명</div>
            <div>2025.01.22 15:77</div>
          </div>
        </div>
        <Textarea />
      </div>
    </div>
  );
}
