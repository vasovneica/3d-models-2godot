import React from "react";


export const Sidebar= ()=>{
    return(
        <div className="sidebar">
        <div className="block-title">how to use</div>

        <div className="block-title">Новости</div>
        <div className="block">
          <div>
            Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem voluptas sequi commodi totam repellat
            dolores deserunt, porro veniam, facilis expedita laboriosam quia
            perferendis fugit quae minima labore tempora vitae dicta.
          </div>
        </div>
        <div className="block-title">Подписаться</div>
        <div className="block block_flex">
          <input type="text" placeholder="Email" />
          <button type="button">Подписаться</button>
        </div>
      </div>
    );
}