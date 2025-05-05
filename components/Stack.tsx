"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CardData {
      id: number;
      img: string;
}

interface StackProps {
      randomRotation?: boolean;
      sensitivity?: number;
      cardDimensions?: { width: number; height: number };
      sendToBackOnClick?: boolean;
      cardsData: CardData[];
      animationConfig?: { stiffness: number; damping: number };
}

const Stack: React.FC<StackProps> = ({
      randomRotation = false,
      sensitivity = 200,
      cardDimensions = { width: 208, height: 208 },
      sendToBackOnClick = false,
      cardsData = [],
      animationConfig = { stiffness: 260, damping: 20 }
}) => {
      const [cards, setCards] = useState<CardData[]>([])
      const [mounted, setMounted] = useState(false)
      const containerRef = useRef<HTMLDivElement>(null)
      const draggedCard = useRef<number | null>(null)
      const dragStartX = useRef(0)

      // Tránh tạo mảng cardControls để không gây lỗi với Hooks

      // Chỉ sử dụng useState sau khi component đã mount
      useEffect(() => {
            setCards(cardsData)
            setMounted(true)
      }, [cardsData])

      // Send a card to the back of the stack
      const sendCardToBack = (cardId: number) => {
            setCards((prevCards) => {
                  const cardIndex = prevCards.findIndex((card) => card.id === cardId)
                  if (cardIndex === -1) return prevCards

                  const newCards = [...prevCards]
                  const [removed] = newCards.splice(cardIndex, 1)
                  newCards.push(removed)

                  return newCards
            })
      }

      // Handle drag start
      const handleDragStart = (e: React.MouseEvent | React.TouchEvent, cardId: number) => {
            draggedCard.current = cardId

            // Get initial X position
            if ('touches' in e) {
                  dragStartX.current = e.touches[0].clientX
            } else {
                  dragStartX.current = e.clientX
            }
      }

      // Handle drag end
      const handleDragEnd = (e: React.MouseEvent | React.TouchEvent, cardId: number) => {
            if (draggedCard.current !== cardId) return

            let endX = 0

            // Get final X position
            if ('changedTouches' in e) {
                  endX = e.changedTouches[0].clientX
            } else {
                  endX = e.clientX
            }

            // Calculate drag distance
            const dragDistance = endX - dragStartX.current

            // If the drag distance exceeds the sensitivity threshold, send the card to the back
            if (Math.abs(dragDistance) > sensitivity) {
                  sendCardToBack(cardId)
            }

            draggedCard.current = null
      }

      // Handle click to send card to back
      const handleCardClick = (cardId: number) => {
            if (sendToBackOnClick) {
                  sendCardToBack(cardId)
            }
      }

      // Hiển thị placeholder nếu chưa mount hoặc không có cards
      if (!mounted || cards.length === 0) {
            return (
                  <div
                        className="relative"
                        style={{
                              width: cardDimensions.width,
                              height: cardDimensions.height,
                              perspective: 1000
                        }}
                  ></div>
            )
      }

      return (
            <div
                  ref={containerRef}
                  className="relative"
                  style={{
                        width: cardDimensions.width,
                        height: cardDimensions.height,
                        perspective: 1000
                  }}
            >
                  {cards.map((card, index) => {
                        // Calculate scale and rotation based on position in the stack
                        const isTopCard = index === 0
                        const scale = 1 - 0.05 * index
                        const zIndex = cards.length - index

                        // Apply random rotation if enabled - tính toán rotation một lần tại render time
                        // Sử dụng id của card để tạo random có tính nhất quán
                        const seed = card.id * 100
                        const rotation = randomRotation ? ((seed % 10) - 5) : 0

                        return (
                              <motion.div
                                    key={card.id}
                                    className="absolute cursor-grab rounded-lg overflow-hidden select-none"
                                    style={{
                                          width: cardDimensions.width,
                                          height: cardDimensions.height,
                                          zIndex,
                                          transformOrigin: 'center center',
                                    }}
                                    initial={{ scale, rotateZ: rotation }}
                                    animate={{ scale, rotateZ: rotation }}
                                    whileHover={isTopCard ? { scale: scale * 1.05 } : undefined}
                                    whileTap={isTopCard ? { scale: scale * 0.95 } : undefined}
                                    transition={{
                                          type: 'spring',
                                          stiffness: animationConfig.stiffness,
                                          damping: animationConfig.damping
                                    }}
                                    onMouseDown={(e) => isTopCard && handleDragStart(e, card.id)}
                                    onMouseUp={(e) => isTopCard && handleDragEnd(e, card.id)}
                                    onTouchStart={(e) => isTopCard && handleDragStart(e, card.id)}
                                    onTouchEnd={(e) => isTopCard && handleDragEnd(e, card.id)}
                                    onClick={() => isTopCard && handleCardClick(card.id)}
                                    drag={isTopCard}
                                    dragConstraints={containerRef}
                                    dragElastic={0.2}
                              >
                                    <div className="w-full h-full rounded-lg border-4 border-white overflow-hidden">
                                          <Image
                                                src={card.img}
                                                alt={`Card ${card.id}`}
                                                width={cardDimensions.width}
                                                height={cardDimensions.height}
                                                className="w-full h-full object-cover"
                                                priority={index === 0}
                                                unoptimized
                                          />
                                    </div>
                              </motion.div>
                        )
                  })}
            </div>
      )
}

export default Stack 