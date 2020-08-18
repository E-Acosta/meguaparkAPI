const pathImages='../images'
class Mixin {
    capture = (base64: string, id: string): string => {
        try {
            const { imgSync } = require('base64-img')
            let filename = imgSync(base64, pathImages, id)
            return filename
        } catch (error) {
            throw error
        }
    }
}
export const mixin = new Mixin()
