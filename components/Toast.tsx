'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa'

export type ToastType = 'success' | 'error' | 'info'

export interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

const ToastItem = ({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id)
    }, 3000)
    return () => clearTimeout(timer)
  }, [toast.id, onRemove])

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-400" />
      case 'error':
        return <FaTimesCircle className="text-red-400" />
      case 'info':
        return <FaInfoCircle className="text-blue-400" />
    }
  }

  const getBgColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-500/10 border-green-500/30'
      case 'error':
        return 'bg-red-500/10 border-red-500/30'
      case 'info':
        return 'bg-blue-500/10 border-blue-500/30'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.8 }}
      className={`glass-strong rounded-lg p-4 border ${getBgColor(toast.type)} min-w-[300px] max-w-md shadow-lg`}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">{getIcon(toast.type)}</div>
        <p className="text-gray-200 text-sm flex-1">{toast.message}</p>
        <button
          onClick={() => onRemove(toast.id)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaTimesCircle />
        </button>
      </div>
    </motion.div>
  )
}

const Toast = ({ toasts, onRemove }: ToastProps) => {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Toast

